"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { after } from "next/server";

import { roundAdjustedGross } from "@/lib/handicap/adjusted-gross";
import { calculateCourseHandicap } from "@/lib/handicap/course-handicap";
import { calculateDifferential } from "@/lib/handicap/differential";
import { calculateIndexAsOf } from "@/lib/handicap/index";
import type { ScoreDifferential } from "@/lib/handicap/types";
import type { HoleScore } from "@/lib/handicap/types";
import { prisma } from "@/lib/prisma";
import { createRoundSchema, updateRoundSchema } from "@/lib/schemas/round";

export async function createRound(_prev: unknown, formData: FormData) {
  const { userId } = await auth();
  if (!userId) return { error: "You must be signed in" };

  const raw = {
    teeId: formData.get("teeId"),
    datePlayed: formData.get("datePlayed"),
    holesPlayed: Number(formData.get("holesPlayed")),
    courseHandicapSource: formData.get("courseHandicapSource"),
    courseHandicap: formData.get("courseHandicap")
      ? Number(formData.get("courseHandicap"))
      : undefined,
    notes: formData.get("notes") || undefined,
    holeScores: JSON.parse(formData.get("holeScores") as string),
  };

  const parsed = createRoundSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const data = parsed.data;

  const tee = await prisma.tee.findUnique({
    where: { id: data.teeId },
    include: { holes: true, course: true },
  });
  if (!tee) return { error: "Tee not found" };

  let courseHandicap = data.courseHandicap;
  if (data.courseHandicapSource === "INDEX") {
    const userRounds = await prisma.round.findMany({
      where: { userId, datePlayed: { lt: data.datePlayed } },
      select: { datePlayed: true, differential: true },
    });
    const differentials: ScoreDifferential[] = userRounds.map((r) => ({
      datePlayed: r.datePlayed,
      differential: r.differential,
    }));
    const index = calculateIndexAsOf(differentials, data.datePlayed);
    if (index === null) {
      return { error: "Not enough rounds to calculate your index yet" };
    }
    courseHandicap = calculateCourseHandicap(index, tee.slope);
  }

  const holeScoresForCalc: HoleScore[] = data.holeScores.map((hs) => ({
    par: hs.par,
    strokeIndex: hs.strokeIndex,
    score: hs.score,
  }));

  const adjustedGross = roundAdjustedGross(holeScoresForCalc, courseHandicap);
  const differential = calculateDifferential(adjustedGross, tee.rating, tee.slope);

  const round = await prisma.$transaction(async (tx) => {
    const r = await tx.round.create({
      data: {
        userId,
        teeId: data.teeId,
        datePlayed: data.datePlayed,
        holesPlayed: data.holesPlayed,
        adjustedGrossScore: adjustedGross,
        differential,
        courseHandicap,
        courseHandicapSource: data.courseHandicapSource,
        notes: data.notes,
      },
    });

    await tx.holeScore.createMany({
      data: data.holeScores.map((hs) => ({
        roundId: r.id,
        holeNumber: hs.holeNumber,
        par: hs.par,
        strokeIndex: hs.strokeIndex,
        score: hs.score,
      })),
    });

    return r;
  });

  after(() => {
    console.warn(
      `Round saved: ${round.id} | differential: ${differential} | adjusted gross: ${adjustedGross} | course handicap: ${courseHandicap}`,
    );
  });

  redirect("/rounds");
}

export async function updateRound(
  roundId: string,
  _prev: unknown,
  formData: FormData,
) {
  const { userId } = await auth();
  if (!userId) return { error: "You must be signed in" };

  const existing = await prisma.round.findUnique({ where: { id: roundId } });
  if (!existing || existing.userId !== userId) {
    return { error: "Round not found" };
  }

  const raw = {
    teeId: formData.get("teeId"),
    datePlayed: formData.get("datePlayed"),
    holesPlayed: Number(formData.get("holesPlayed")),
    courseHandicapSource: formData.get("courseHandicapSource"),
    courseHandicap: formData.get("courseHandicap")
      ? Number(formData.get("courseHandicap"))
      : undefined,
    notes: formData.get("notes") || undefined,
    holeScores: JSON.parse(formData.get("holeScores") as string),
  };

  const parsed = updateRoundSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  const data = parsed.data;

  const tee = await prisma.tee.findUnique({
    where: { id: data.teeId! },
    include: { holes: true },
  });
  if (!tee) return { error: "Tee not found" };

  let courseHandicap = data.courseHandicap ?? existing.courseHandicap;
  if (data.courseHandicapSource === "INDEX") {
    const userRounds = await prisma.round.findMany({
      where: {
        userId,
        id: { not: roundId },
        datePlayed: { lt: data.datePlayed ?? existing.datePlayed },
      },
      select: { datePlayed: true, differential: true },
    });
    const differentials: ScoreDifferential[] = userRounds.map((r) => ({
      datePlayed: r.datePlayed,
      differential: r.differential,
    }));
    const index = calculateIndexAsOf(
      differentials,
      data.datePlayed ?? existing.datePlayed,
    );
    if (index === null) {
      return { error: "Not enough rounds to calculate your index yet" };
    }
    courseHandicap = calculateCourseHandicap(index, tee.slope);
  }

  const holeScoresForCalc: HoleScore[] = (data.holeScores ?? []).map(
    (hs) => ({
      par: hs.par,
      strokeIndex: hs.strokeIndex,
      score: hs.score,
    }),
  );

  const adjustedGross = roundAdjustedGross(holeScoresForCalc, courseHandicap);
  const differential = calculateDifferential(adjustedGross, tee.rating, tee.slope);

  await prisma.$transaction(async (tx) => {
    await tx.round.update({
      where: { id: roundId },
      data: {
        teeId: data.teeId,
        datePlayed: data.datePlayed,
        holesPlayed: data.holesPlayed,
        adjustedGrossScore: adjustedGross,
        differential,
        courseHandicap,
        courseHandicapSource: data.courseHandicapSource,
        notes: data.notes,
      },
    });

    await tx.holeScore.deleteMany({ where: { roundId } });

    if (data.holeScores) {
      await tx.holeScore.createMany({
        data: data.holeScores.map((hs) => ({
          roundId,
          holeNumber: hs.holeNumber,
          par: hs.par,
          strokeIndex: hs.strokeIndex,
          score: hs.score,
        })),
      });
    }
  });

  redirect("/rounds");
}

export async function deleteRound(roundId: string) {
  const { userId } = await auth();
  if (!userId) return { error: "You must be signed in" };

  const existing = await prisma.round.findUnique({ where: { id: roundId } });
  if (!existing || existing.userId !== userId) {
    return { error: "Round not found" };
  }

  await prisma.round.delete({ where: { id: roundId } });

  redirect("/rounds");
}
