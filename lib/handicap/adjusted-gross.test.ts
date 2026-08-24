import { describe, expect, it } from "vitest";

import {
  netDoubleBogeyCap,
  roundAdjustedGross,
  strokesReceived,
} from "./adjusted-gross";
import type { HoleScore } from "./types";

describe("strokesReceived", () => {
  it("CH 15, SI 14 → 1 (receives stroke)", () => {
    expect(strokesReceived(15, 14)).toBe(1);
  });

  it("CH 15, SI 16 → 0 (no stroke)", () => {
    expect(strokesReceived(15, 16)).toBe(0);
  });

  it("CH 15, SI 15 → 1 (boundary: equal)", () => {
    expect(strokesReceived(15, 15)).toBe(1);
  });

  it("CH -2, SI 1 → 0 (plus handicap: no strokes)", () => {
    expect(strokesReceived(-2, 1)).toBe(0);
  });

  it("CH 0, SI 1 → 0 (scratch player)", () => {
    expect(strokesReceived(0, 1)).toBe(0);
  });
});

describe("netDoubleBogeyCap", () => {
  it("par 4, CH 15, SI 14 → 7 (par+2+1)", () => {
    expect(netDoubleBogeyCap(4, 15, 14)).toBe(7);
  });

  it("par 4, CH 15, SI 16 → 6 (par+2+0)", () => {
    expect(netDoubleBogeyCap(4, 15, 16)).toBe(6);
  });

  it("par 4, CH -2, SI 1 → 6 (plus: par+2)", () => {
    expect(netDoubleBogeyCap(4, -2, 1)).toBe(6);
  });
});

describe("roundAdjustedGross", () => {
  it("caps score exceeding NDB", () => {
    const holes: HoleScore[] = [
      { par: 4, strokeIndex: 1, score: 10 }, // capped at 7
      { par: 3, strokeIndex: 2, score: 3 },
    ];
    // CH 15: SI1 → receive, SI2 → receive. NDB: 4+2+1=7, 3+2+1=6
    expect(roundAdjustedGross(holes, 15)).toBe(10); // 7 + 3
  });

  it("null score treated as NDB cap", () => {
    const holes: HoleScore[] = [
      { par: 4, strokeIndex: 1, score: null }, // NDB: 4+2+1=7
      { par: 3, strokeIndex: 2, score: 3 },
    ];
    expect(roundAdjustedGross(holes, 15)).toBe(10); // 7 + 3
  });

  it("sample round: raw 97 → adjusted 96 (Fairview Championship, CH 15)", () => {
    // Fairview Municipal Championship tees: par 72, rating 74.2, slope 138
    // Holes: par 4/3/4/4/5/4/3/4/4 = 35 front, 4/3/4/5/4/4/3/5/5 = 37 back = 72
    // CH 15: SI 1-15 receive a stroke, SI 16-18 do not
    // NDB caps: par3+SI≤15=6, par4+SI≤15=7, par5+SI≤15=8
    const holes: HoleScore[] = [
      // Front 9
      { par: 4, strokeIndex: 5, score: 6 },   // NDB 7, ok
      { par: 3, strokeIndex: 17, score: 4 },  // no stroke, NDB 5, ok
      { par: 4, strokeIndex: 1, score: 5 },   // NDB 7, ok
      { par: 4, strokeIndex: 11, score: 6 },  // NDB 7, ok
      { par: 5, strokeIndex: 7, score: 7 },   // NDB 8, ok
      { par: 4, strokeIndex: 3, score: 5 },   // NDB 7, ok
      { par: 3, strokeIndex: 15, score: 4 },  // NDB 6, ok
      { par: 4, strokeIndex: 13, score: 6 },  // NDB 7, ok
      { par: 4, strokeIndex: 9, score: 5 },   // NDB 7, ok
      // Back 9
      { par: 4, strokeIndex: 4, score: 5 },   // NDB 7, ok
      { par: 3, strokeIndex: 16, score: 4 },  // no stroke, NDB 5, ok
      { par: 4, strokeIndex: 2, score: 5 },   // NDB 7, ok
      { par: 5, strokeIndex: 6, score: 7 },   // NDB 8, ok
      { par: 4, strokeIndex: 14, score: 8 },  // NDB 7, CAPPED → 7
      { par: 4, strokeIndex: 10, score: 5 },  // NDB 7, ok
      { par: 3, strokeIndex: 18, score: 4 },  // no stroke, NDB 5, ok
      { par: 5, strokeIndex: 8, score: 6 },   // NDB 8, ok
      { par: 5, strokeIndex: 12, score: 5 },  // NDB 8, ok
    ];
    // Raw: sum = 97 (hole 14 has score 8, one over its NDB cap of 7)
    const raw = holes.reduce((s, h) => s + (h.score ?? 0), 0);
    expect(raw).toBe(97);
    // Adjusted: hole 14 capped from 8 → 7, total = 96
    expect(roundAdjustedGross(holes, 15)).toBe(96);
  });

  it("plus handicap CH -2: all holes cap at par+2 (no strokes received)", () => {
    const holes: HoleScore[] = [
      { par: 4, strokeIndex: 1, score: 10 },
      { par: 3, strokeIndex: 2, score: 10 },
    ];
    // NDB: 4+2+0=6, 3+2+0=5
    expect(roundAdjustedGross(holes, -2)).toBe(11); // 6 + 5
  });
});
