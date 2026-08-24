import { HistoryContent } from "@/components/history-content";
import { calculateIndexAsOf } from "@/lib/handicap/index";
import type { ScoreDifferential } from "@/lib/handicap/types";
import { prisma } from "@/lib/prisma";

export default async function HistoryPage() {
  const rounds = await prisma.round.findMany({
    orderBy: { datePlayed: "asc" },
    include: { tee: { include: { course: true } } },
  });

  const differentials: ScoreDifferential[] = rounds.map((r) => ({
    datePlayed: r.datePlayed,
    differential: r.differential,
  }));

  const data = rounds.map((round, idx) => {
    const diffsAsOf = differentials.slice(0, idx + 1);
    const indexAtPoint = calculateIndexAsOf(diffsAsOf, round.datePlayed);
    return {
      date: round.datePlayed.toISOString(),
      dateLabel: round.datePlayed.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "2-digit",
      }),
      index: indexAtPoint,
      course: round.tee.course.name,
      tee: round.tee.name,
      score: round.adjustedGrossScore,
      differential: round.differential,
    };
  });

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
          History
        </h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Your handicap index over time
        </p>
      </div>

      <HistoryContent data={data} />
    </div>
  );
}
