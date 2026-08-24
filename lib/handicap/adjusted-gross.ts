import type { HoleScore } from "./types";

export function strokesReceived(
  courseHandicap: number,
  strokeIndex: number,
): 0 | 1 {
  return strokeIndex <= courseHandicap ? 1 : 0;
}

export function netDoubleBogeyCap(
  par: number,
  courseHandicap: number,
  strokeIndex: number,
): number {
  return par + 2 + strokesReceived(courseHandicap, strokeIndex);
}

export function roundAdjustedGross(
  holeScores: HoleScore[],
  courseHandicap: number,
): number {
  return holeScores.reduce((sum, hole) => {
    const cap = netDoubleBogeyCap(hole.par, courseHandicap, hole.strokeIndex);
    const score = hole.score === null ? cap : Math.min(hole.score, cap);
    return sum + score;
  }, 0);
}
