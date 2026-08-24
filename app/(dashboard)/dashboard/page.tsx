import Link from "next/link";

import { calculateIndex } from "@/lib/handicap/index";
import type { ScoreDifferential } from "@/lib/handicap/types";
import { prisma } from "@/lib/prisma";
import { formatDate, formatDifferential, formatHandicap } from "@/lib/utils/format";

export default async function DashboardPage() {
  const rounds = await prisma.round.findMany({
    orderBy: { datePlayed: "desc" },
    include: { tee: { include: { course: true } } },
  });

  const differentials: ScoreDifferential[] = rounds.map((r) => ({
    datePlayed: r.datePlayed,
    differential: r.differential,
  }));

  const index = calculateIndex(differentials);
  const recentRounds = rounds.slice(0, 5);
  const sparklineData = rounds
    .slice(0, 20)
    .reverse()
    .map((r) => r.differential);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {/* Hero */}
      <section className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-6 text-center sm:p-8">
        <p className="text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
          Handicap Index
        </p>
        <p className="mt-2 font-[var(--font-display)] text-6xl font-bold tracking-tight text-[var(--gold)] sm:text-7xl">
          {formatHandicap(index)}
        </p>

        {sparklineData.length >= 2 && (
          <div className="mt-6 flex justify-center">
            <Sparkline data={sparklineData} />
          </div>
        )}
      </section>

      {/* Recent rounds */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            Recent rounds
          </h2>
          <Link
            href="/rounds"
            className="text-[11px] font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            View all
          </Link>
        </div>

        {recentRounds.length === 0 ? (
          <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-8 text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              No rounds yet
            </p>
            <Link
              href="/rounds/new"
              className="mt-4 inline-block rounded bg-[var(--green)] px-5 py-2 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
            >
              Add your first round
            </Link>
          </div>
        ) : (
          <div className="space-y-px">
            {recentRounds.map((round) => (
              <div
                key={round.id}
                className="flex items-center justify-between rounded bg-[var(--surface)] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[var(--text-secondary)]">
                    {formatDate(round.datePlayed)}
                  </span>
                  <span className="text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--foreground)]">
                    {round.tee.course.name}
                  </span>
                  <span className="text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {round.tee.name}
                  </span>
                </div>
                <span className="font-[var(--font-mono)] text-xs text-[var(--gold)]">
                  {formatDifferential(round.differential)}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Add round */}
      {recentRounds.length > 0 && (
        <div className="flex justify-center">
          <Link
            href="/rounds/new"
            className="rounded bg-[var(--green)] px-6 py-2.5 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
          >
            Add round
          </Link>
        </div>
      )}
    </div>
  );
}

function Sparkline({ data }: { data: number[] }) {
  const width = 200;
  const height = 48;
  const padding = 4;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2);
      const y = padding + ((max - v) / range) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const lastX = padding + ((data.length - 1) / (data.length - 1)) * (width - padding * 2);
  const lastY = padding + ((max - data[data.length - 1]) / range) * (height - padding * 2);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="overflow-visible"
    >
      <polyline
        points={points}
        fill="none"
        stroke="var(--green)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="3" fill="var(--gold)" />
    </svg>
  );
}
