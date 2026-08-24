import { MIN_ROUNDS_FOR_INDEX } from "./constants";

export function getDifferentialsUsed(roundCount: number): number | null {
  if (roundCount < MIN_ROUNDS_FOR_INDEX) return null;
  if (roundCount <= 5) return 1;
  if (roundCount <= 8) return 2;
  if (roundCount <= 10) return 3;
  if (roundCount <= 12) return 4;
  if (roundCount <= 14) return 5;
  if (roundCount <= 16) return 6;
  if (roundCount <= 17) return 7;
  return 8;
}
