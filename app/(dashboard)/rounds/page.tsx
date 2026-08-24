import Link from "next/link";

import { DeleteRoundButton } from "@/components/delete-round-button";
import { prisma } from "@/lib/prisma";
import { formatDate, formatDifferential } from "@/lib/utils/format";

export default async function RoundsPage() {
  const rounds = await prisma.round.findMany({
    orderBy: { datePlayed: "desc" },
    include: { tee: { include: { course: true } } },
  });

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
          Rounds
        </h1>
        <Link
          href="/rounds/new"
          className="rounded bg-[var(--green)] px-4 py-1.5 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
        >
          Add round
        </Link>
      </div>

      {rounds.length === 0 ? (
        <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-8 text-center">
          <p className="text-sm text-[var(--text-secondary)]">No rounds yet</p>
          <Link
            href="/rounds/new"
            className="mt-4 inline-block rounded bg-[var(--green)] px-5 py-2 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
          >
            Add your first round
          </Link>
        </div>
      ) : (
        <div className="space-y-px">
          {rounds.map((round) => (
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
              <div className="flex items-center gap-3">
                <span className="font-[var(--font-mono)] text-xs text-[var(--gold)]">
                  {formatDifferential(round.differential)}
                </span>
                <Link
                  href={`/rounds/${round.id}/edit`}
                  className="text-[10px] font-medium tracking-wide text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
                >
                  Edit
                </Link>
                <DeleteRoundButton roundId={round.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
