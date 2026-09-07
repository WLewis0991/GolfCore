import { NextRequest, NextResponse } from "next/server";

import {
  clampRadiusMiles,
  fetchOverpassJson,
  getBoundingBox,
  normalizeOverpassElements,
  OVERPASS_BUSY_MESSAGE,
  type OverpassCourse,
} from "@/lib/courses/nearby";

const cache = new Map<string, { data: OverpassCourse[]; expires: number }>();
const CACHE_TTL = 5 * 60 * 1000;

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lat = parseFloat(searchParams.get("lat") ?? "");
  const lng = parseFloat(searchParams.get("lng") ?? "");
  const parsedRadius = parseFloat(searchParams.get("radiusMiles") ?? "10");

  if (
    isNaN(lat) ||
    isNaN(lng) ||
    lat < -90 ||
    lat > 90 ||
    lng < -180 ||
    lng > 180
  ) {
    return NextResponse.json(
      { error: "lat and lng are required" },
      { status: 400 },
    );
  }

  const radiusMiles = clampRadiusMiles(parsedRadius);

  const cacheKey = `${lat.toFixed(4)},${lng.toFixed(4)},${radiusMiles}`;
  const cached = cache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const [south, west, north, east] = getBoundingBox(lat, lng, radiusMiles);
  const query = `
    [out:json][timeout:15];
    nwr["leisure"="golf_course"](${south},${west},${north},${east});
    out center;
  `;

  try {
    const data = await fetchOverpassJson(query);
    const courses = normalizeOverpassElements(data.elements ?? [], lat, lng);

    cache.set(cacheKey, { data: courses, expires: Date.now() + CACHE_TTL });

    return NextResponse.json(courses);
  } catch {
    return NextResponse.json(
      { error: OVERPASS_BUSY_MESSAGE },
      { status: 502 },
    );
  }
}
