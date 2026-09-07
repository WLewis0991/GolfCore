export type OverpassCourse = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  distance: number;
};

export type OverpassElement = {
  id: number;
  lat?: number;
  lon?: number;
  center?: { lat: number; lon: number };
  tags?: { name?: string };
};

function toRadians(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function haversineDistance(
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

export function getBoundingBox(
  lat: number,
  lng: number,
  radiusMiles: number,
): [number, number, number, number] {
  const latDelta = radiusMiles / 69;
  const lngDelta = radiusMiles / (69 * Math.cos(toRadians(lat)));
  return [lat - latDelta, lng - lngDelta, lat + latDelta, lng + lngDelta];
}

export function clampRadiusMiles(parsedRadius: number): number {
  if (isNaN(parsedRadius)) return 10;
  return Math.min(50, Math.max(1, parsedRadius));
}

export const OVERPASS_URLS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];

export const OVERPASS_BUSY_MESSAGE =
  "Course lookup is busy, try again in a moment";

const OVERPASS_FETCH_TIMEOUT_MS = 20000;

export async function fetchOverpassJson(
  query: string,
  fetchImpl: typeof fetch = fetch,
): Promise<{ elements?: OverpassElement[] }> {
  let lastError: unknown = null;
  for (const url of OVERPASS_URLS) {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      OVERPASS_FETCH_TIMEOUT_MS,
    );
    try {
      const res = await fetchImpl(url, {
        method: "POST",
        body: new URLSearchParams({ data: query }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        signal: controller.signal,
      });
      if (res.ok) {
        return (await res.json()) as { elements?: OverpassElement[] };
      }
      lastError = new Error(`Overpass ${res.status}`);
    } catch (err) {
      lastError = err;
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError instanceof Error
    ? lastError
    : new Error(OVERPASS_BUSY_MESSAGE);
}

export function normalizeOverpassElements(
  elements: OverpassElement[],
  lat: number,
  lng: number,
): OverpassCourse[] {
  return elements
    .map((el) => {
      const courseLat = el.lat ?? el.center?.lat;
      const courseLon = el.lon ?? el.center?.lon;
      if (
        typeof courseLat !== "number" ||
        typeof courseLon !== "number" ||
        !Number.isFinite(courseLat) ||
        !Number.isFinite(courseLon)
      ) {
        return null;
      }
      return {
        id: el.id,
        name: el.tags?.name ?? "Unknown course",
        lat: courseLat,
        lng: courseLon,
        distance: haversineDistance(lat, lng, courseLat, courseLon),
      };
    })
    .filter((c: OverpassCourse | null): c is OverpassCourse => c !== null)
    .sort((a, b) => a.distance - b.distance);
}
