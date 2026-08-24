import { NextRequest, NextResponse } from "next/server";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";

type OverpassCourse = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  distance: number;
};

const cache = new Map<string, { data: OverpassCourse[]; expires: number }>();
const CACHE_TTL = 5 * 60 * 1000;

function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 3959;
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getBoundingBox(
  lat: number,
  lng: number,
  radiusMiles: number,
): [number, number, number, number] {
  const latDelta = radiusMiles / 69;
  const lngDelta = radiusMiles / (69 * Math.cos(toRadians(lat)));
  return [lat - latDelta, lng - lngDelta, lat + latDelta, lng + lngDelta];
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const lat = parseFloat(searchParams.get("lat") ?? "");
  const lng = parseFloat(searchParams.get("lng") ?? "");
  const radiusMiles = parseFloat(searchParams.get("radiusMiles") ?? "10");

  if (isNaN(lat) || isNaN(lng)) {
    return NextResponse.json(
      { error: "lat and lng are required" },
      { status: 400 },
    );
  }

  const cacheKey = `${lat.toFixed(4)},${lng.toFixed(4)},${radiusMiles}`;
  const cached = cache.get(cacheKey);
  if (cached && cached.expires > Date.now()) {
    return NextResponse.json(cached.data);
  }

  const [south, west, north, east] = getBoundingBox(lat, lng, radiusMiles);
  const query = `
    [out:json][timeout:15];
    way["leisure"="golf_course"](${south},${west},${north},${east});
    out center;
  `;

  try {
    const res = await fetch(OVERPASS_URL, {
      method: "POST",
      body: new URLSearchParams({ data: query }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Overpass API error" },
        { status: 502 },
      );
    }

    const data = await res.json();
    const courses: OverpassCourse[] = (data.elements ?? [])
      .filter(
        (el: { center?: { lat: number; lon: number } }) => el.center,
      )
      .map((el: { id: number; tags?: { name?: string }; center: { lat: number; lon: number } }) => ({
        id: el.id,
        name: el.tags?.name ?? "Unknown course",
        lat: el.center.lat,
        lng: el.center.lon,
        distance: haversineDistance(lat, lng, el.center.lat, el.center.lon),
      }))
      .sort((a: OverpassCourse, b: OverpassCourse) => a.distance - b.distance);

    cache.set(cacheKey, { data: courses, expires: Date.now() + CACHE_TTL });

    return NextResponse.json(courses);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 },
    );
  }
}
