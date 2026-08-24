import { NextRequest, NextResponse } from "next/server";

const OPENGOLF_API = "https://api.opengolfapi.org";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ error: "Course ID required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${OPENGOLF_API}/v1/courses/${id}/tees`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Course API error" },
        { status: 502 },
      );
    }

    const data = await res.json();

    const course = {
      id: data.id,
      name: data.course_name ?? data.club_name ?? "Unknown",
      club: data.club_name ?? null,
      city: data.city ?? null,
      state: data.state ?? null,
      lat: data.latitude ?? null,
      lng: data.longitude ?? null,
      tees: (data.tees ?? []).map(
        (t: {
          name?: string;
          tee_name?: string;
          gender?: string;
          course_rating?: number;
          slope_rating?: number;
          par?: number;
          par_total?: number;
          holes?: {
            hole?: number;
            par?: number;
            handicap?: number;
            yardage?: number;
          }[];
        }) => ({
          name: t.tee_name ?? t.name ?? "Unknown",
          gender: (t.gender ?? "male").toUpperCase() === "FEMALE" ? "WOMENS" : "MENS",
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

    return NextResponse.json(course);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch course data" },
      { status: 500 },
    );
  }
}
