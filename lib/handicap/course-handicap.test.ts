import { describe, expect, it } from "vitest";

import { calculateCourseHandicap } from "./course-handicap";

describe("calculateCourseHandicap", () => {
  it("12.4 index on 138 slope → 15", () => {
    expect(calculateCourseHandicap(12.4, 138)).toBe(15);
  });

  it("10 index on 113 slope → 10", () => {
    expect(calculateCourseHandicap(10, 113)).toBe(10);
  });

  it("0 index → 0", () => {
    expect(calculateCourseHandicap(0, 138)).toBe(0);
  });

  it("negative index -2 on 138 slope → -2 (plus handicap)", () => {
    expect(calculateCourseHandicap(-2, 138)).toBe(-2);
  });

  it("negative index -1.5 on 113 slope → -1 (half-up toward zero)", () => {
    expect(calculateCourseHandicap(-1.5, 113)).toBe(-1);
  });

  it("throws RangeError for slope 54", () => {
    expect(() => calculateCourseHandicap(12.4, 54)).toThrow(RangeError);
  });

  it("throws RangeError for slope 156", () => {
    expect(() => calculateCourseHandicap(12.4, 156)).toThrow(RangeError);
  });
});
