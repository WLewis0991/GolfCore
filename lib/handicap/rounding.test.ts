import { describe, expect, it } from "vitest";

import {
  assertValidRating,
  assertValidSlope,
  roundToTenth,
  roundToWhole,
} from "./rounding";

describe("roundToTenth", () => {
  it("rounds 1.25 to 1.3", () => {
    expect(roundToTenth(1.25)).toBe(1.3);
  });

  it("rounds 1.24 to 1.2", () => {
    expect(roundToTenth(1.24)).toBe(1.2);
  });

  it("rounds -1.05 to -1", () => {
    expect(roundToTenth(-1.05)).toBe(-1);
  });

  it("rounds -1.15 to -1.1", () => {
    expect(roundToTenth(-1.15)).toBe(-1.1);
  });

  it("rounds 0 to 0", () => {
    expect(roundToTenth(0)).toBe(0);
  });
});

describe("roundToWhole", () => {
  it("rounds 2.5 to 3 (half-up)", () => {
    expect(roundToWhole(2.5)).toBe(3);
  });

  it("rounds 2.4 to 2", () => {
    expect(roundToWhole(2.4)).toBe(2);
  });

  it("rounds -2.5 to -2 (negative half toward zero)", () => {
    expect(roundToWhole(-2.5)).toBe(-2);
  });

  it("rounds -2.4 to -2", () => {
    expect(roundToWhole(-2.4)).toBe(-2);
  });

  it("rounds 0 to 0", () => {
    expect(roundToWhole(0)).toBe(0);
  });
});

describe("assertValidSlope", () => {
  it("accepts 55 (minimum)", () => {
    expect(() => assertValidSlope(55)).not.toThrow();
  });

  it("accepts 113 (reference)", () => {
    expect(() => assertValidSlope(113)).not.toThrow();
  });

  it("accepts 155 (maximum)", () => {
    expect(() => assertValidSlope(155)).not.toThrow();
  });

  it("throws RangeError for 54", () => {
    expect(() => assertValidSlope(54)).toThrow(RangeError);
  });

  it("throws RangeError for 156", () => {
    expect(() => assertValidSlope(156)).toThrow(RangeError);
  });

  it("throws RangeError for NaN", () => {
    expect(() => assertValidSlope(NaN)).toThrow(RangeError);
  });

  it("throws RangeError for Infinity", () => {
    expect(() => assertValidSlope(Infinity)).toThrow(RangeError);
  });
});

describe("assertValidRating", () => {
  it("accepts 65", () => {
    expect(() => assertValidRating(65)).not.toThrow();
  });

  it("accepts 0.1", () => {
    expect(() => assertValidRating(0.1)).not.toThrow();
  });

  it("throws RangeError for 0", () => {
    expect(() => assertValidRating(0)).toThrow(RangeError);
  });

  it("throws RangeError for -1", () => {
    expect(() => assertValidRating(-1)).toThrow(RangeError);
  });

  it("throws RangeError for NaN", () => {
    expect(() => assertValidRating(NaN)).toThrow(RangeError);
  });
});
