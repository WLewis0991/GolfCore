"use client";

import { useRouter } from "next/navigation";
import { useActionState, useCallback, useMemo, useState } from "react";

import { createRound } from "@/lib/actions/rounds";

type TeeWithHoles = {
  id: string;
  name: string;
  gender: string;
  rating: number;
  slope: number;
  par: number;
  holes: { holeNumber: number; par: number; strokeIndex: number }[];
};

type CourseWithTees = {
  id: string;
  name: string;
  city: string | null;
  state: string | null;
  tees: TeeWithHoles[];
};

type HoleScore = {
  holeNumber: number;
  par: number;
  strokeIndex: number;
  score: number | null;
};

export function RoundForm({ courses }: { courses: CourseWithTees[] }) {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createRound, null);

  const [query, setQuery] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedTeeId, setSelectedTeeId] = useState<string | null>(null);
  const [datePlayed, setDatePlayed] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [holesPlayed, setHolesPlayed] = useState(18);
  const [courseHandicapSource, setCourseHandicapSource] = useState<"INDEX" | "MANUAL">("INDEX");
  const [courseHandicap, setCourseHandicap] = useState("");
  const [notes, setNotes] = useState("");
  const [holeScores, setHoleScores] = useState<HoleScore[]>([]);

  const filteredCourses = useMemo(() => {
    if (!query) return courses;
    const q = query.toLowerCase();
    return courses.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.city?.toLowerCase().includes(q) ||
        c.state?.toLowerCase().includes(q),
    );
  }, [courses, query]);

  const selectedCourse = courses.find((c) => c.id === selectedCourseId);
  const selectedTee = selectedCourse?.tees.find((t) => t.id === selectedTeeId);

  const handleCourseSelect = useCallback((courseId: string) => {
    setSelectedCourseId(courseId);
    setSelectedTeeId(null);
    setHoleScores([]);
  }, []);

  const handleTeeSelect = useCallback((teeId: string) => {
    setSelectedTeeId(teeId);
  }, []);

  const selectedTeeData = useMemo(() => {
    if (!selectedTee) return null;
    return selectedTee.holes.map((h) => ({
      holeNumber: h.holeNumber,
      par: h.par,
      strokeIndex: h.strokeIndex,
    }));
  }, [selectedTee?.id]);

  const updateScore = useCallback(
    (holeNumber: number, score: number | null) => {
      setHoleScores((prev) => {
        const existing = prev.find((h) => h.holeNumber === holeNumber);
        if (existing) {
          return prev.map((h) =>
            h.holeNumber === holeNumber ? { ...h, score } : h,
          );
        }
        const hole = selectedTeeData?.find((h) => h.holeNumber === holeNumber);
        if (!hole) return prev;
        return [...prev, { ...hole, score }];
      });
    },
    [selectedTeeData],
  );

  const adjustedGross = useMemo(() => {
    if (!selectedTee || holeScores.length === 0) return 0;
    const ch =
      courseHandicapSource === "MANUAL"
        ? Number(courseHandicap) || 0
        : 0;
    return holeScores.reduce((sum, hs) => {
      const cap = hs.par + 2 + (hs.strokeIndex <= ch ? 1 : 0);
      const effective = hs.score === null ? cap : Math.min(hs.score, cap);
      return sum + effective;
    }, 0);
  }, [holeScores, selectedTee?.id, courseHandicapSource, courseHandicap]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTeeId || holeScores.length === 0) return;

    const fd = new FormData();
    fd.set("teeId", selectedTeeId);
    fd.set("datePlayed", datePlayed);
    fd.set("holesPlayed", String(holesPlayed));
    fd.set("courseHandicapSource", courseHandicapSource);
    if (courseHandicapSource === "MANUAL") {
      fd.set("courseHandicap", courseHandicap);
    } else {
      fd.set("courseHandicap", "0");
    }
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
      {/* Course search */}
      <div>
        <label className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
          Course
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses..."
          className="w-full rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
        />
        {query && filteredCourses.length > 0 && (
          <div className="mt-1 max-h-40 overflow-y-auto rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)]">
            {filteredCourses.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  handleCourseSelect(c.id);
                  setQuery(c.name);
                }}
                className="w-full px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--green-deep)]"
              >
                {c.name}
                {c.city && (
                  <span className="ml-2 text-[var(--text-secondary)]">
                    {c.city}
                    {c.state && `, ${c.state}`}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tee selection */}
      {selectedCourse && (
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            Tee
          </label>
          <div className="flex flex-wrap gap-2">
            {selectedCourse.tees.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTeeSelect(t.id)}
                className={`rounded border px-3 py-1.5 text-xs font-medium transition-colors ${
                  selectedTeeId === t.id
                    ? "border-[var(--gold)] bg-[var(--gold)]/10 text-[var(--gold)]"
                    : "border-[var(--text-tertiary)]/30 text-[var(--text-secondary)] hover:border-[var(--text-secondary)]"
                }`}
              >
                {t.name} · {t.gender.toLowerCase()} · {t.rating} / {t.slope}
              </button>
            ))}
          </div>
        </div>
      )}

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
      {selectedTeeData && (
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
                {selectedTeeData
                  .slice(0, holesPlayed)
                  .map((hole) => {
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
      )}

      {/* Course handicap */}
      {selectedTee && (
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
      )}

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
        disabled={isPending || !selectedTeeId || holeScores.length === 0}
        className="w-full rounded bg-[var(--green)] py-2.5 text-sm font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)] disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save round"}
      </button>
    </form>
  );
}
