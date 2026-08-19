import { config } from "dotenv";
config({ path: ".env.local" });

import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
  adapter: new PrismaNeon({ connectionString: process.env.DATABASE_URL_UNPOOLED }),
});

type Hole = { par: number; strokeIndex: number };

const HOLE_LAYOUT: Hole[] = [
  { par: 4, strokeIndex: 9 },
  { par: 3, strokeIndex: 17 },
  { par: 5, strokeIndex: 7 },
  { par: 4, strokeIndex: 5 },
  { par: 4, strokeIndex: 11 },
  { par: 4, strokeIndex: 1 },
  { par: 3, strokeIndex: 15 },
  { par: 5, strokeIndex: 3 },
  { par: 4, strokeIndex: 13 },
  { par: 4, strokeIndex: 10 },
  { par: 4, strokeIndex: 6 },
  { par: 3, strokeIndex: 16 },
  { par: 5, strokeIndex: 4 },
  { par: 4, strokeIndex: 12 },
  { par: 4, strokeIndex: 2 },
  { par: 3, strokeIndex: 18 },
  { par: 4, strokeIndex: 8 },
  { par: 5, strokeIndex: 14 },
];

type TeeSeed = {
  name: string;
  gender: "MENS" | "WOMENS";
  rating: number;
  slope: number;
  yards: number[];
};

const TEES: TeeSeed[] = [
  {
    name: "Championship",
    gender: "MENS",
    rating: 74.2,
    slope: 138,
    yards: [
      385, 165, 520, 400, 350, 425, 175, 545, 360, 375, 410, 190, 560, 350, 430, 150, 395, 520,
    ],
  },
  {
    name: "Regular",
    gender: "MENS",
    rating: 71.6,
    slope: 129,
    yards: [
      365, 155, 500, 385, 335, 405, 165, 525, 345, 360, 390, 180, 540, 335, 410, 140, 380, 500,
    ],
  },
  {
    name: "Senior",
    gender: "MENS",
    rating: 68.9,
    slope: 120,
    yards: [
      340, 145, 475, 365, 320, 385, 155, 500, 325, 340, 370, 165, 515, 320, 390, 130, 360, 475,
    ],
  },
  {
    name: "Ladies",
    gender: "WOMENS",
    rating: 72.8,
    slope: 128,
    yards: [
      315, 135, 450, 345, 300, 360, 145, 475, 310, 320, 350, 150, 490, 300, 370, 120, 340, 450,
    ],
  },
];

const ROUND_SCORES = [5, 3, 6, 4, 6, 7, 4, 8, 5, 5, 4, 3, 9, 5, 6, 4, 7, 6];

async function main() {
  const course = await prisma.course.upsert({
    where: { slug: "fairview-municipal" },
    update: {},
    create: {
      name: "Fairview Municipal",
      city: "Springfield",
      state: "IL",
      country: "US",
      lat: 39.7817,
      lng: -89.6501,
      slug: "fairview-municipal",
      source: "MANUAL",
    },
  });

  for (const tee of TEES) {
    const created = await prisma.tee.upsert({
      where: {
        courseId_name_gender: { courseId: course.id, name: tee.name, gender: tee.gender },
      },
      update: {},
      create: {
        courseId: course.id,
        name: tee.name,
        gender: tee.gender,
        rating: tee.rating,
        slope: tee.slope,
        par: HOLE_LAYOUT.reduce((sum, hole) => sum + hole.par, 0),
      },
    });

    await prisma.teeHole.createMany({
      data: HOLE_LAYOUT.map((hole, i) => ({
        teeId: created.id,
        holeNumber: i + 1,
        par: hole.par,
        strokeIndex: hole.strokeIndex,
        yards: tee.yards[i],
      })),
      skipDuplicates: true,
    });
  }

  const userId = process.env.SEED_USER_ID;
  if (!userId) {
    console.log("SEED_USER_ID not set - skipping sample round");
    return;
  }

  const championshipTee = await prisma.tee.findUnique({
    where: { courseId_name_gender: { courseId: course.id, name: "Championship", gender: "MENS" } },
  });

  if (!championshipTee) {
    console.log("Championship tee not found - skipping sample round");
    return;
  }

  const datePlayed = new Date("2026-08-15");
  const existing = await prisma.round.findFirst({
    where: { userId, teeId: championshipTee.id, datePlayed },
  });

  if (existing) {
    console.log("Sample round already exists - skipping");
    return;
  }

  await prisma.round.create({
    data: {
      userId,
      teeId: championshipTee.id,
      datePlayed,
      notes: "Sample round - Championship tees",
      holesPlayed: 18,
      adjustedGrossScore: 96,
      differential: 17.9,
      courseHandicap: 15,
      courseHandicapSource: "MANUAL",
      holeScores: {
        create: HOLE_LAYOUT.map((hole, i) => ({
          holeNumber: i + 1,
          par: hole.par,
          strokeIndex: hole.strokeIndex,
          score: ROUND_SCORES[i],
        })),
      },
    },
  });

  console.log("Seed complete: Fairview Municipal, 4 tees, 1 sample round");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
