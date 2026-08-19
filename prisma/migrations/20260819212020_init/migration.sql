-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MENS', 'WOMENS');

-- CreateEnum
CREATE TYPE "CourseSource" AS ENUM ('OVERPASS', 'GOLF_COURSE_API', 'MANUAL');

-- CreateEnum
CREATE TYPE "CourseHandicapSource" AS ENUM ('INDEX', 'MANUAL');

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "club" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "slug" TEXT,
    "source" "CourseSource" NOT NULL DEFAULT 'MANUAL',
    "externalId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tee" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "slope" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeeHole" (
    "id" TEXT NOT NULL,
    "teeId" TEXT NOT NULL,
    "holeNumber" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "strokeIndex" INTEGER NOT NULL,
    "yards" INTEGER,

    CONSTRAINT "TeeHole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Round" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "teeId" TEXT NOT NULL,
    "datePlayed" TIMESTAMP(0) NOT NULL,
    "notes" TEXT,
    "holesPlayed" INTEGER NOT NULL DEFAULT 18,
    "adjustedGrossScore" INTEGER NOT NULL,
    "differential" DOUBLE PRECISION NOT NULL,
    "courseHandicap" INTEGER NOT NULL,
    "courseHandicapSource" "CourseHandicapSource" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HoleScore" (
    "id" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,
    "holeNumber" INTEGER NOT NULL,
    "par" INTEGER NOT NULL,
    "strokeIndex" INTEGER NOT NULL,
    "score" INTEGER,

    CONSTRAINT "HoleScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course_slug_key" ON "Course"("slug");

-- CreateIndex
CREATE INDEX "Course_name_idx" ON "Course"("name");

-- CreateIndex
CREATE INDEX "Course_city_state_idx" ON "Course"("city", "state");

-- CreateIndex
CREATE INDEX "Course_lat_lng_idx" ON "Course"("lat", "lng");

-- CreateIndex
CREATE UNIQUE INDEX "Course_source_externalId_key" ON "Course"("source", "externalId");

-- CreateIndex
CREATE INDEX "Tee_courseId_idx" ON "Tee"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Tee_courseId_name_gender_key" ON "Tee"("courseId", "name", "gender");

-- CreateIndex
CREATE INDEX "TeeHole_teeId_idx" ON "TeeHole"("teeId");

-- CreateIndex
CREATE UNIQUE INDEX "TeeHole_teeId_holeNumber_key" ON "TeeHole"("teeId", "holeNumber");

-- CreateIndex
CREATE INDEX "Round_userId_datePlayed_idx" ON "Round"("userId", "datePlayed");

-- CreateIndex
CREATE INDEX "Round_teeId_idx" ON "Round"("teeId");

-- CreateIndex
CREATE INDEX "Round_userId_idx" ON "Round"("userId");

-- CreateIndex
CREATE INDEX "HoleScore_roundId_idx" ON "HoleScore"("roundId");

-- CreateIndex
CREATE UNIQUE INDEX "HoleScore_roundId_holeNumber_key" ON "HoleScore"("roundId", "holeNumber");

-- AddForeignKey
ALTER TABLE "Tee" ADD CONSTRAINT "Tee_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeeHole" ADD CONSTRAINT "TeeHole_teeId_fkey" FOREIGN KEY ("teeId") REFERENCES "Tee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Round" ADD CONSTRAINT "Round_teeId_fkey" FOREIGN KEY ("teeId") REFERENCES "Tee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HoleScore" ADD CONSTRAINT "HoleScore_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE CASCADE ON UPDATE CASCADE;
