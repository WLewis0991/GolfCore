"use server";

import { prisma } from "@/lib/prisma";

type OpenGolfCourse = {
  name: string;
  city: string | null;
  state: string | null;
  lat: number | null;
  lng: number | null;
  tees: {
    name: string;
    color: string | null;
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
    const [courseRes, teesRes, holesRes] = await Promise.all([
      fetch(`${OPENGOLF_API}/v1/courses/${externalId}`),
      fetch(`${OPENGOLF_API}/v1/courses/${externalId}/tees`),
      fetch(`${OPENGOLF_API}/v1/courses/${externalId}/holes`),
    ]);

    if (!courseRes.ok || !teesRes.ok) return null;

    const courseData = await courseRes.json();
    const teesData = await teesRes.json();
    const holesData = holesRes.ok ? await holesRes.json() : { holes: [] };

    const holes: {
      number: number;
      par: number;
      handicap_index: number;
      yardages: Record<string, number>;
    }[] = holesData.holes ?? [];

    return {
      name: courseData.course_name ?? courseData.name ?? "Unknown",
      city: courseData.city ?? null,
      state: courseData.state ?? null,
      lat: courseData.latitude ?? null,
      lng: courseData.longitude ?? null,
      tees: (teesData.tees ?? []).map(
        (t: {
          tee_name?: string;
          tee_key?: string;
          tee_color?: string;
          gender?: string;
          course_rating?: number;
          slope?: number;
          slope_rating?: number;
          par?: number;
        }) => ({
          name: t.tee_name ?? t.tee_key ?? "Unknown",
          color: t.tee_color ?? null,
          gender:
            (t.gender ?? "male").toUpperCase() === "FEMALE"
              ? "WOMENS"
              : "MENS",
          rating: t.course_rating ?? 0,
          slope: t.slope ?? t.slope_rating ?? 113,
          par: t.par ?? 72,
          holes: holes.map((h) => ({
            holeNumber: h.number,
            par: h.par,
            strokeIndex: h.handicap_index,
            yards: t.tee_color ? (h.yardages[t.tee_color] ?? null) : null,
          })),
        }),
      ),
    };
  } catch {
    return null;
  }
}

export async function ensureCourseCached(
  externalId: string,
): Promise<{
  id: string;
  name: string;
  city: string | null;
  state: string | null;
  tees: {
    id: string;
    name: string;
    gender: string;
    rating: number;
    slope: number;
    par: number;
    holes: { holeNumber: number; par: number; strokeIndex: number }[];
  }[];
}> {
  const existing = await prisma.course.findUnique({
    where: { source_externalId: { source: "GOLF_COURSE_API", externalId } },
    include: {
      tees: { include: { holes: { orderBy: { holeNumber: "asc" } } } },
    },
  });
  if (existing) {
    return {
      id: existing.id,
      name: existing.name,
      city: existing.city,
      state: existing.state,
      tees: existing.tees.map((t) => ({
        id: t.id,
        name: t.name,
        gender: t.gender,
        rating: t.rating,
        slope: t.slope,
        par: t.par,
        holes: t.holes.map((h) => ({
          holeNumber: h.holeNumber,
          par: h.par,
          strokeIndex: h.strokeIndex,
        })),
      })),
    };
  }

  const apiData = await fetchCourseData(externalId);
  if (!apiData) throw new Error("Failed to fetch course data");

  const course = await prisma.$transaction(async (tx) => {
    const c = await tx.course.upsert({
      where: {
        source_externalId: { source: "GOLF_COURSE_API", externalId },
      },
      update: {
        name: apiData.name,
        city: apiData.city,
        state: apiData.state,
        lat: apiData.lat,
        lng: apiData.lng,
      },
      create: {
        name: apiData.name,
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

  const fullCourse = await prisma.course.findUnique({
    where: { id: course.id },
    include: {
      tees: { include: { holes: { orderBy: { holeNumber: "asc" } } } },
    },
  });

  return {
    id: fullCourse!.id,
    name: fullCourse!.name,
    city: fullCourse!.city,
    state: fullCourse!.state,
    tees: fullCourse!.tees.map((t) => ({
      id: t.id,
      name: t.name,
      gender: t.gender,
      rating: t.rating,
      slope: t.slope,
      par: t.par,
      holes: t.holes.map((h) => ({
        holeNumber: h.holeNumber,
        par: h.par,
        strokeIndex: h.strokeIndex,
      })),
    })),
  };
}
