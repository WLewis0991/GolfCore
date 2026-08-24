import { REFERENCE_SLOPE } from "./constants";
import { assertValidSlope, roundToWhole } from "./rounding";

export function calculateCourseHandicap(index: number, slope: number): number {
  assertValidSlope(slope);
  return roundToWhole((index * slope) / REFERENCE_SLOPE);
}
