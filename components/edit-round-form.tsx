"use client";

import { useRouter } from "next/navigation";
import { useActionState, useCallback, useMemo, useState } from "react";

import { updateRound } from "@/lib/actions/rounds";

type HoleScoreData = {
  holeNumber: number;
  par: number;
  strokeIndex: number;
  score: number | null;
};

type RoundData = {
  id: string;
  datePlayed: Date;
  holesPlayed: number;
  courseHandicap: number;
  courseHandicapSource: string;
  notes: string | null;
  holeScores: { holeNumber: number; par: number; strokeIndex: number; score: number | null }[];
  tee: {
    id: string;
    name: string;
    gender: string;
    rating: number;
    slope: number;
    course: { name: string };
    holes: { holeNumber: number; par: number; strokeIndex: number }[];
  };
};

export function EditRoundForm({ round }: { round: RoundData }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    (_prev: unknown, formData: FormData) => updateRound(round.id, _prev, formData),
    null,
  );

  const [datePlayed, setDatePlayed] = useState(
    new Date(round.datePlayed).toISOString().split("T")[0],
  );
  const [holesPlayed, setHolesPlayed] = useState(round.holesPlayed);
  const [courseHandicapSource, setCourseHandicapSource] = useState<"INDEX" | "MANUAL">(
    round.courseHandicapSource as "INDEX" | "MANUAL",
  );
  const [courseHandicap, setCourseHandicap] = useState(
    String(round.courseHandicap),
  );
  const [notes, setNotes] = useState(round.notes ?? "");
  const [holeScores, setHoleScores] = useState<HoleScoreData[]>(
    round.holeScores.map((hs) => ({
      holeNumber: hs.holeNumber,
      par: hs.par,
      strokeIndex: hs.strokeIndex,
      score: hs.score,
    })),
  );

  const teeHoles = useMemo(
    () =>
      round.tee.holes.map((h) => ({
        holeNumber: h.holeNumber,
        par: h.par,
        strokeIndex: h.strokeIndex,
      })),
    [round.tee.id],
  );

  const updateScore = useCallback(
    (holeNumber: number, score: number | null) => {
      setHoleScores((prev) => {
        const existing = prev.find((h) => h.holeNumber === holeNumber);
        if (existing) {
          return prev.map((h) =>
            h.holeNumber === holeNumber ? { ...h, score } : h,
          );
        }
        const hole = teeHoles.find((h) => h.holeNumber === holeNumber);
        if (!hole) return prev;
        return [...prev, { ...hole, score }];
      });
    },
    [teeHoles],
  );

  const adjustedGross = useMemo(() => {
    const ch =
      courseHandicapSource === "MANUAL"
        ? Number(courseHandicap) || 0
        : 0;
    return holeScores.reduce((sum, hs) => {
      const cap = hs.par + 2 + (hs.strokeIndex <= ch ? 1 : 0);
      const effective = hs.score === null ? cap : Math.min(hs.score, cap);
      return sum + effective;
    }, 0);
  }, [holeScores, courseHandicapSource, courseHandicap]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData();
    fd.set("teeId", round.tee.id);
    fd.set("datePlayed", datePlayed);
    fd.set("holesPlayed", String(holesPlayed));
    fd.set("courseHandicapSource", courseHandicapSource);
    fd.set("courseHandicap", courseHandicap);
    fd.set("holeScores", JSON.stringify(holeScores));
    if (notes) fd.set("notes", notes);

    formAction(fd);
  };

  if (state && !state.error) {
    router.push("/rounds");
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Course info (read-only) */}
      <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] px-4 py-3">
        <span className="text-sm text-[var(--foreground)]">
          {round.tee.course.name}
        </span>
        <span className="mx-2 text-[var(--text-tertiary)]">·</span>
        <span className="text-sm text-[var(--text-secondary)]">
          {round.tee.name} · {round.tee.rating} / {round.tee.slope}
        </span>
      </div>

      {/* Date + holes */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            Date
          </label>
          <input
            type="date"
            value={datePlayed}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDatePlayed(e.target.value)}
            className="w-full rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
          />
        </div>
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            Holes
          </label>
          <div className="flex gap-2">
            {[9, 18].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setHolesPlayed(n)}
                className={`flex-1 rounded border py-2 text-sm font-medium transition-colors ${
                  holesPlayed === n
                    ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold)]"
                    : "border-[var(--text-tertiary)]/30 text-[var(--text-secondary)] hover:border-[var(--text-secondary)]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Score grid */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            Scores
          </label>
          <span className="font-[var(--font-mono)] text-xs text-[var(--text-secondary)]">
            Adj. gross:{" "}
            <span className="text-[var(--gold)]">{adjustedGross}</span>
          </span>
        </div>
        <div className="overflow-x-auto rounded border border-[var(--text-tertiary)]/20">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--text-tertiary)]/20 text-[10px] tracking-wider text-[var(--text-secondary)] uppercase">
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-right">Par</th>
                <th className="px-3 py-2 text-right">SI</th>
                <th className="px-3 py-2 text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {teeHoles.slice(0, holesPlayed).map((hole) => {
                const hs = holeScores.find(
                  (h) => h.holeNumber === hole.holeNumber,
                );
                return (
                  <tr
                    key={hole.holeNumber}
                    className="border-b border-[var(--text-tertiary)]/10 last:border-0"
                  >
                    <td className="px-3 py-1.5 font-[var(--font-mono)] text-[var(--text-secondary)]">
                      {hole.holeNumber}
                    </td>
                    <td className="px-3 py-1.5 text-right font-[var(--font-mono)] text-[var(--text-secondary)]">
                      {hole.par}
                    </td>
                    <td className="px-3 py-1.5 text-right font-[var(--font-mono)] text-[var(--text-secondary)]">
                      {hole.strokeIndex}
                    </td>
                    <td className="px-3 py-1.5 text-right">
                      <input
                        type="number"
                        min={0}
                        max={40}
                        value={hs?.score ?? ""}
                        onChange={(e) =>
                          updateScore(
                            hole.holeNumber,
                            e.target.value === ""
                              ? null
                              : Number(e.target.value),
                          )
                        }
                        placeholder="-"
                        className="w-14 rounded border border-[var(--text-tertiary)]/20 bg-[var(--background)] px-2 py-1 text-center font-[var(--font-mono)] text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Course handicap */}
      <div>
        <label className="mb-2 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
          Course handicap
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <input
              type="radio"
              name="chSource"
              checked={courseHandicapSource === "INDEX"}
              onChange={() => setCourseHandicapSource("INDEX")}
              className="accent-[var(--gold)]"
            />
            Auto from your index
          </label>
          <label className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <input
              type="radio"
              name="chSource"
              checked={courseHandicapSource === "MANUAL"}
              onChange={() => setCourseHandicapSource("MANUAL")}
              className="accent-[var(--gold)]"
            />
            Enter manually
          </label>
        </div>
        {courseHandicapSource === "MANUAL" && (
          <input
            type="number"
            value={courseHandicap}
            onChange={(e) => setCourseHandicap(e.target.value)}
            placeholder="Course handicap"
            className="mt-2 w-full rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
          />
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
          Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="How did it go?"
          rows={2}
          className="w-full rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
        />
      </div>

      {/* Errors */}
      {state?.error && typeof state.error === "string" && (
        <p className="text-sm text-red-400">{state.error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded bg-[var(--green)] py-2.5 text-sm font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)] disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}
