import { describe, expect, it } from "vitest";

import { getDifferentialsUsed } from "./differentials-used";

describe("getDifferentialsUsed", () => {
  it("1 round → null", () => {
    expect(getDifferentialsUsed(1)).toBeNull();
  });

  it("2 rounds → null", () => {
    expect(getDifferentialsUsed(2)).toBeNull();
  });

  it("3 rounds → 1", () => {
    expect(getDifferentialsUsed(3)).toBe(1);
  });

  it("4 rounds → 1", () => {
    expect(getDifferentialsUsed(4)).toBe(1);
  });

  it("5 rounds → 1", () => {
    expect(getDifferentialsUsed(5)).toBe(1);
  });

  it("6 rounds → 2", () => {
    expect(getDifferentialsUsed(6)).toBe(2);
  });

  it("7 rounds → 2", () => {
    expect(getDifferentialsUsed(7)).toBe(2);
  });

  it("8 rounds → 2", () => {
    expect(getDifferentialsUsed(8)).toBe(2);
  });

  it("9 rounds → 3", () => {
    expect(getDifferentialsUsed(9)).toBe(3);
  });

  it("10 rounds → 3", () => {
    expect(getDifferentialsUsed(10)).toBe(3);
  });

  it("11 rounds → 4", () => {
    expect(getDifferentialsUsed(11)).toBe(4);
  });

  it("12 rounds → 4", () => {
    expect(getDifferentialsUsed(12)).toBe(4);
  });

  it("13 rounds → 5", () => {
    expect(getDifferentialsUsed(13)).toBe(5);
  });

  it("14 rounds → 5", () => {
    expect(getDifferentialsUsed(14)).toBe(5);
  });

  it("15 rounds → 6", () => {
    expect(getDifferentialsUsed(15)).toBe(6);
  });

  it("16 rounds → 6", () => {
    expect(getDifferentialsUsed(16)).toBe(6);
  });

  it("17 rounds → 7", () => {
    expect(getDifferentialsUsed(17)).toBe(7);
  });

  it("18 rounds → 8", () => {
    expect(getDifferentialsUsed(18)).toBe(8);
  });

  it("20 rounds → 8", () => {
    expect(getDifferentialsUsed(20)).toBe(8);
  });

  it("21 rounds → 8", () => {
    expect(getDifferentialsUsed(21)).toBe(8);
  });

  it("100 rounds → 8", () => {
    expect(getDifferentialsUsed(100)).toBe(8);
  });
});
