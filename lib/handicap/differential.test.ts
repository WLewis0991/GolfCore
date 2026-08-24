import { describe, expect, it } from "vitest";

import { calculateDifferential } from "./differential";

describe("calculateDifferential", () => {
  it("sample round: 96 on 74.2/138 → 17.9", () => {
    expect(calculateDifferential(96, 74.2, 138)).toBe(17.9);
  });

  it("scratch on reference course: 72 on 72/113 → 0", () => {
    expect(calculateDifferential(72, 72, 113)).toBe(0);
  });

  it("below rating: 68 on 72/113 → -4", () => {
    expect(calculateDifferential(68, 72, 113)).toBe(-4);
  });

  it("barely below rating: 72 on 72.1/113 → -0.1", () => {
    expect(calculateDifferential(72, 72.1, 113)).toBe(-0.1);
  });

  it("over rating: 80 on 72/113 → 8", () => {
    expect(calculateDifferential(80, 72, 113)).toBe(8);
  });

  it("throws RangeError for invalid rating (0)", () => {
    expect(() => calculateDifferential(72, 0, 113)).toThrow(RangeError);
  });

  it("throws RangeError for invalid slope (54)", () => {
    expect(() => calculateDifferential(72, 72, 54)).toThrow(RangeError);
  });
});
