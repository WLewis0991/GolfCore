import { describe, expect, it } from "vitest";

import {
  clampRadiusMiles,
  fetchOverpassJson,
  getBoundingBox,
  haversineDistance,
  normalizeOverpassElements,
  OVERPASS_URLS,
} from "./nearby";

describe("haversineDistance", () => {
  it("returns 0 for identical coordinates", () => {
    expect(haversineDistance(40, -75, 40, -75)).toBe(0);
  });

  it("increases with distance (1 degree lat ~ 69 miles)", () => {
    const d = haversineDistance(40, -75, 41, -75);
    expect(d).toBeGreaterThan(68);
    expect(d).toBeLessThan(70);
  });
});

describe("getBoundingBox", () => {
  it("expands symmetrically around the point", () => {
    const [south, west, north, east] = getBoundingBox(40, -75, 10);
    expect(south).toBeLessThan(40);
    expect(north).toBeGreaterThan(40);
    expect(west).toBeLessThan(-75);
    expect(east).toBeGreaterThan(-75);
  });
});

describe("clampRadiusMiles", () => {
  it("defaults to 10 for NaN", () => {
    expect(clampRadiusMiles(NaN)).toBe(10);
  });

  it("clamps to 1..50", () => {
    expect(clampRadiusMiles(0)).toBe(1);
    expect(clampRadiusMiles(-5)).toBe(1);
    expect(clampRadiusMiles(100)).toBe(50);
    expect(clampRadiusMiles(25)).toBe(25);
  });
});

describe("normalizeOverpassElements", () => {
  it("keeps node (lat/lon), way (center), and relation (center) elements", () => {
    const courses = normalizeOverpassElements(
      [
        { id: 1, lat: 40.01, lon: -75.01, tags: { name: "Node Course" } },
        {
          id: 2,
          center: { lat: 40.02, lon: -75.02 },
          tags: { name: "Way Course" },
        },
        {
          id: 3,
          center: { lat: 40.03, lon: -75.03 },
          tags: { name: "Relation Course" },
        },
      ],
      40,
      -75,
    );
    expect(courses.map((c) => c.name)).toEqual([
      "Node Course",
      "Way Course",
      "Relation Course",
    ]);
  });

  it("drops elements without usable coordinates", () => {
    const courses = normalizeOverpassElements(
      [
        { id: 1, tags: { name: "No coords" } },
        { id: 2, lat: NaN, lon: -75.01, tags: { name: "NaN lat" } },
        { id: 3, lat: 40.01, lon: -75.01, tags: { name: "Valid" } },
      ],
      40,
      -75,
    );
    expect(courses.map((c) => c.name)).toEqual(["Valid"]);
  });

  it("falls back to 'Unknown course' and sorts by distance", () => {
    const courses = normalizeOverpassElements(
      [
        { id: 1, lat: 40.1, lon: -75.1 },
        { id: 2, lat: 40.01, lon: -75.01, tags: { name: "Near" } },
      ],
      40,
      -75,
    );
    expect(courses[0].name).toBe("Near");
    expect(courses[1].name).toBe("Unknown course");
    expect(courses[0].distance).toBeLessThan(courses[1].distance);
  });
});

describe("fetchOverpassJson", () => {
  const okResponse = (elements: unknown[]) =>
    new Response(JSON.stringify({ elements }), { status: 200 });

  it("falls back to the second mirror after a 504", async () => {
    const calls: string[] = [];
    const fetchImpl = (async (url: string | URL | Request) => {
      calls.push(String(url));
      if (calls.length === 1) return new Response("busy", { status: 504 });
      return okResponse([
        { id: 1, lat: 40.01, lon: -75.01, tags: { name: "Fallback" } },
      ]);
    }) as typeof fetch;

    const data = await fetchOverpassJson("data", fetchImpl);
    expect(data.elements?.[0]).toMatchObject({ id: 1 });
    expect(calls).toEqual([...OVERPASS_URLS]);
  });

  it("throws after all mirrors fail", async () => {
    const fetchImpl = (async () =>
      new Response("busy", { status: 504 })) as typeof fetch;
    await expect(fetchOverpassJson("data", fetchImpl)).rejects.toThrow();
  });

  it("retries the next mirror after a network error", async () => {
    let attempts = 0;
    const fetchImpl = (async () => {
      attempts += 1;
      if (attempts === 1) throw new Error("network down");
      return okResponse([]);
    }) as typeof fetch;

    const data = await fetchOverpassJson("data", fetchImpl);
    expect(data.elements).toEqual([]);
    expect(attempts).toBe(2);
  });
});
