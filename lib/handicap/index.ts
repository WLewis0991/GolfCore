import {
  INDEX_MULTIPLIER,
  MAX_ROUNDS_CONSIDERED,
  MIN_ROUNDS_FOR_INDEX,
} from "./constants";
import { getDifferentialsUsed } from "./differentials-used";
import { roundToTenth } from "./rounding";
import type { ScoreDifferential } from "./types";

export function calculateIndex(
  differentials: ScoreDifferential[],
): number | null {
  if (differentials.length < MIN_ROUNDS_FOR_INDEX) return null;
  const used = getDifferentialsUsed(differentials.length)!;
  const sorted = [...differentials].sort(
    (a, b) => a.datePlayed.getTime() - b.datePlayed.getTime(),
  );
  const last20 = sorted.slice(-MAX_ROUNDS_CONSIDERED);
  const lowestN = [...last20]
    .sort((a, b) => a.differential - b.differential)
    .slice(0, used);
  const avg =
    lowestN.reduce((s, d) => s + d.differential, 0) / lowestN.length;
  return roundToTenth(avg * INDEX_MULTIPLIER);
}

export function calculateIndexAsOf(
  differentials: ScoreDifferential[],
  asOfDate: Date,
): number | null {
  return calculateIndex(differentials.filter((d) => d.datePlayed < asOfDate));
}
