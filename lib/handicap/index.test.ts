import { describe, expect, it } from "vitest";

import { calculateIndex, calculateIndexAsOf } from "./index";
import type { ScoreDifferential } from "./types";

function diff(date: string, value: number): ScoreDifferential {
  return { datePlayed: new Date(date), differential: value };
}

describe("calculateIndex", () => {
  it("null if fewer than 3 rounds", () => {
    expect(calculateIndex([])).toBeNull();
    expect(calculateIndex([diff("2026-01-01", 15)])).toBeNull();
    expect(
      calculateIndex([diff("2026-01-01", 15), diff("2026-02-01", 16)]),
    ).toBeNull();
  });

  it("3 rounds → 1 used, lowest × 0.96, rounded to tenth", () => {
    const diffs = [
      diff("2026-01-01", 20),
      diff("2026-02-01", 15),
      diff("2026-03-01", 18),
    ];
    // lowest = 15, avg = 15, × 0.96 = 14.4
    expect(calculateIndex(diffs)).toBe(14.4);
  });

  it("20 rounds → 8 used, lowest 8 of 20", () => {
    const diffs = Array.from({ length: 20 }, (_, i) =>
      diff(`2026-01-${String(i + 1).padStart(2, "0")}`, 10 + i),
    );
    // 10, 11, ..., 29 → lowest 8 are 10-17, avg = 13.5, × 0.96 = 12.96 → 13.0
    expect(calculateIndex(diffs)).toBe(13.0);
  });

  it("25 rounds → still 8 of last 20 (oldest 5 dropped)", () => {
    const diffs = Array.from({ length: 25 }, (_, i) =>
      diff(`2026-01-${String(i + 1).padStart(2, "0")}`, 10 + i),
    );
    // oldest 5 (10-14) dropped, last 20 are 15-34, lowest 8 are 15-22, avg = 18.5, × 0.96 = 17.76 → 17.8
    expect(calculateIndex(diffs)).toBe(17.8);
  });

  it("sorts by date, not by array order", () => {
    const diffs = [
      diff("2026-03-01", 15), // most recent
      diff("2026-01-01", 10), // oldest
      diff("2026-02-01", 12), // middle
    ];
    // lowest = 10, avg = 10, × 0.96 = 9.6
    expect(calculateIndex(diffs)).toBe(9.6);
  });

  it("plus handicap: all negative differentials → negative index", () => {
    const diffs = [
      diff("2026-01-01", -4),
      diff("2026-02-01", -3.5),
      diff("2026-03-01", -3),
    ];
    // lowest = -4, avg = -4, × 0.96 = -3.84 → -3.8
    expect(calculateIndex(diffs)).toBe(-3.8);
  });

  it("mixed positive and negative: lowest N selected correctly", () => {
    const diffs = [
      diff("2026-01-01", -2),
      diff("2026-02-01", 15),
      diff("2026-03-01", 20),
    ];
    // lowest = -2, avg = -2, × 0.96 = -1.92 → -1.9
    expect(calculateIndex(diffs)).toBe(-1.9);
  });
});

describe("calculateIndexAsOf", () => {
  it("filters by datePlayed < asOfDate", () => {
    const diffs = [
      diff("2026-01-01", 10),
      diff("2026-02-15", 15), // exactly on asOfDate, excluded
      diff("2026-03-01", 20),
    ];
    // as of Feb 15 → only Jan 1 round (< 3 minimum) → null
    expect(calculateIndexAsOf(diffs, new Date("2026-02-15"))).toBeNull();
  });

  it("3 rounds before asOfDate → valid index", () => {
    const diffs = [
      diff("2026-01-01", 10),
      diff("2026-01-15", 15),
      diff("2026-02-01", 20),
      diff("2026-03-01", 25),
    ];
    // as of Feb 15 → Jan 1, Jan 15, Feb 1 (3 rounds), lowest = 10, avg = 10, × 0.96 = 9.6
    expect(calculateIndexAsOf(diffs, new Date("2026-02-15"))).toBe(9.6);
  });

  it("excludes rounds on exact asOfDate", () => {
    const diffs = [
      diff("2026-01-01", 10),
      diff("2026-02-01", 15),
      diff("2026-03-01", 20),
    ];
    // as of Feb 1 → only Jan round → <3 rounds → null
    expect(calculateIndexAsOf(diffs, new Date("2026-02-01"))).toBeNull();
  });

  it("returns null if no rounds before asOfDate", () => {
    const diffs = [diff("2026-06-01", 15)];
    expect(calculateIndexAsOf(diffs, new Date("2026-01-01"))).toBeNull();
  });
});
