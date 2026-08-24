import { REFERENCE_SLOPE } from "./constants";
import { assertValidRating, assertValidSlope, roundToTenth } from "./rounding";

export function calculateDifferential(
  adjustedGross: number,
  rating: number,
  slope: number,
): number {
  assertValidRating(rating);
  assertValidSlope(slope);
  return roundToTenth((REFERENCE_SLOPE / slope) * (adjustedGross - rating));
}
