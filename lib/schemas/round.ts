import { z } from "zod";

const holeScoreSchema = z.object({
  holeNumber: z.number().int().min(1).max(18),
  par: z.number().int().min(3).max(6),
  strokeIndex: z.number().int().min(1).max(18),
  score: z.number().int().min(0).max(40).nullable(),
});

export const createRoundSchema = z.object({
  teeId: z.string().min(1, "Tee is required"),
  datePlayed: z.coerce
    .date({ error: "Date is required" })
    .max(new Date(), { message: "Date cannot be in the future" }),
  holesPlayed: z.number().int().refine((v) => v === 9 || v === 18, {
    message: "Must be 9 or 18 holes",
  }),
  courseHandicap: z.number().int(),
  courseHandicapSource: z.enum(["INDEX", "MANUAL"]),
  holeScores: z.array(holeScoreSchema).min(1, "At least one hole score required"),
  notes: z.string().max(500).optional(),
});

export const updateRoundSchema = createRoundSchema.partial().extend({
  holeScores: z.array(holeScoreSchema).min(1).optional(),
});

export type CreateRoundInput = z.infer<typeof createRoundSchema>;
export type UpdateRoundInput = z.infer<typeof updateRoundSchema>;
