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
    const [teesRes, holesRes] = await Promise.all([
      fetch(`${OPENGOLF_API}/v1/courses/${id}/tees`),
      fetch(`${OPENGOLF_API}/v1/courses/${id}/holes`),
    ]);

    if (!teesRes.ok) {
      return NextResponse.json(
        { error: "Course API error" },
        { status: 502 },
      );
    }

    const teesData = await teesRes.json();
    const holesData = holesRes.ok ? await holesRes.json() : { holes: [] };

    const holes: {
      number: number;
      par: number;
      handicap_index: number;
      yardages: Record<string, number>;
    }[] = holesData.holes ?? [];

    const course = {
      name: "Course",
      tees: (teesData.tees ?? []).map(
        (t: {
          tee_name?: string;
          tee_color?: string;
          tee_key?: string;
          gender?: string;
          course_rating?: number;
          slope?: number;
          slope_rating?: number;
          par?: number;
          par_total?: number;
          yardage?: number;
        }) => ({
          name: t.tee_name ?? t.tee_key ?? "Unknown",
          color: t.tee_color ?? null,
          gender:
            (t.gender ?? "male").toUpperCase() === "FEMALE"
              ? "WOMENS"
              : "MENS",
          rating: t.course_rating ?? 0,
          slope: t.slope ?? t.slope_rating ?? 113,
          par: t.par_total ?? t.par ?? 72,
          holes: holes.map((h) => ({
            holeNumber: h.number,
            par: h.par,
            strokeIndex: h.handicap_index,
            yards: t.tee_color ? (h.yardages[t.tee_color] ?? null) : null,
          })),
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
