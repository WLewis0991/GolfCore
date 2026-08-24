import { NextRequest, NextResponse } from "next/server";

const OPENGOLF_API = "https://api.opengolfapi.org";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q");

  if (!q || q.length < 2) {
    return NextResponse.json(
      { error: "Query must be at least 2 characters" },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(
      `${OPENGOLF_API}/v1/courses/search?q=${encodeURIComponent(q)}&limit=20`,
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Course API error" },
        { status: 502 },
      );
    }

    const data = await res.json();
    const courses = (data.courses ?? []).map(
      (c: {
        id: string;
        name?: string;
        course_name?: string;
        club_name?: string;
        city?: string;
        state?: string;
        latitude?: number;
        longitude?: number;
      }) => ({
        id: c.id,
        name: c.course_name ?? c.club_name ?? c.name ?? "Unknown",
        club: c.club_name ?? null,
        city: c.city ?? null,
        state: c.state ?? null,
        lat: c.latitude ?? null,
        lng: c.longitude ?? null,
      }),
    );

    return NextResponse.json(courses);
  } catch {
    return NextResponse.json(
      { error: "Failed to search courses" },
      { status: 500 },
    );
  }
}
