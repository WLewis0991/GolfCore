"use server";

import { prisma } from "@/lib/prisma";

type OpenGolfCourse = {
  id: number;
  name: string;
  club: string | null;
  city: string | null;
  state: string | null;
  lat: number | null;
  lng: number | null;
  tees: {
    name: string;
    gender: string;
    rating: number;
    slope: number;
    par: number;
    holes: {
      holeNumber: number;
      par: number;
      strokeIndex: number;
      yards: number | null;
    }[];
  }[];
};

const OPENGOLF_API = "https://api.opengolfapi.org";

async function fetchCourseData(
  externalId: string,
): Promise<OpenGolfCourse | null> {
  try {
    const res = await fetch(`${OPENGOLF_API}/v1/courses/${externalId}/tees`);
    if (!res.ok) return null;
    const data = await res.json();

    return {
      id: data.id,
      name: data.course_name ?? data.club_name ?? "Unknown",
      club: data.club_name ?? null,
      city: data.city ?? null,
      state: data.state ?? null,
      lat: data.latitude ?? null,
      lng: data.longitude ?? null,
      tees: (data.tees ?? []).map(
        (t: {
          tee_name?: string;
          name?: string;
          gender?: string;
          course_rating?: number;
          slope_rating?: number;
          par_total?: number;
          par?: number;
          holes?: {
            hole?: number;
            par?: number;
            handicap?: number;
            yardage?: number;
          }[];
        }) => ({
          name: t.tee_name ?? t.name ?? "Unknown",
          gender:
            (t.gender ?? "male").toUpperCase() === "FEMALE"
              ? "WOMENS"
              : "MENS",
          rating: t.course_rating ?? 0,
          slope: t.slope_rating ?? 113,
          par: t.par_total ?? t.par ?? 72,
          holes: (t.holes ?? []).map(
            (h: {
              hole?: number;
              par?: number;
              handicap?: number;
              yardage?: number;
            }) => ({
              holeNumber: h.hole ?? 0,
              par: h.par ?? 4,
              strokeIndex: h.handicap ?? 1,
              yards: h.yardage ?? null,
            }),
          ),
        }),
      ),
    };
  } catch {
    return null;
  }
}

export async function ensureCourseCached(
  externalId: string,
): Promise<{ id: string }> {
  const existing = await prisma.course.findUnique({
    where: { source_externalId: { source: "GOLF_COURSE_API", externalId } },
  });
  if (existing) return { id: existing.id };

  const apiData = await fetchCourseData(externalId);
  if (!apiData) throw new Error("Failed to fetch course data");

  const course = await prisma.$transaction(async (tx) => {
    const c = await tx.course.upsert({
      where: {
        source_externalId: { source: "GOLF_COURSE_API", externalId },
      },
      update: {
        name: apiData.name,
        club: apiData.club,
        city: apiData.city,
        state: apiData.state,
        lat: apiData.lat,
        lng: apiData.lng,
      },
      create: {
        name: apiData.name,
        club: apiData.club,
        city: apiData.city,
        state: apiData.state,
        lat: apiData.lat,
        lng: apiData.lng,
        source: "GOLF_COURSE_API",
        externalId,
      },
    });

    await tx.tee.deleteMany({ where: { courseId: c.id } });

    for (const tee of apiData.tees) {
      const createdTee = await tx.tee.create({
        data: {
          courseId: c.id,
          name: tee.name,
          gender: tee.gender as "MENS" | "WOMENS",
          rating: tee.rating,
          slope: tee.slope,
          par: tee.par,
        },
      });

      if (tee.holes.length > 0) {
        await tx.teeHole.createMany({
          data: tee.holes.map((h) => ({
            teeId: createdTee.id,
            holeNumber: h.holeNumber,
            par: h.par,
            strokeIndex: h.strokeIndex,
            yards: h.yards,
          })),
        });
      }
    }

    return c;
  });

  return { id: course.id };
}
