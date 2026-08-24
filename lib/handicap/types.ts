export type HoleScore = {
  par: number;
  strokeIndex: number;
  score: number | null;
};

export type RoundForDifferential = {
  adjustedGrossScore: number;
  rating: number;
  slope: number;
};

export type ScoreDifferential = {
  datePlayed: Date;
  differential: number;
};
