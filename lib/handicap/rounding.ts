export function roundToTenth(v: number): number {
  return Math.round(v * 10) / 10;
}

export function roundToWhole(v: number): number {
  return Math.round(v);
}

export function assertValidSlope(slope: number): void {
  if (!Number.isFinite(slope) || slope < 55 || slope > 155) {
    throw new RangeError(`Invalid slope: ${slope} (must be 55–155)`);
  }
}

export function assertValidRating(rating: number): void {
  if (!Number.isFinite(rating) || rating <= 0) {
    throw new RangeError(`Invalid rating: ${rating} (must be > 0)`);
  }
}
