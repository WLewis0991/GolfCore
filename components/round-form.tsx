"use client";

import { useRouter } from "next/navigation";
import { useActionState, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { ensureCourseCached } from "@/lib/actions/courses";
import { createRound } from "@/lib/actions/rounds";

type SearchCourse = {
  id: string;
  name: string;
  city: string | null;
  state: string | null;
  lat: number | null;
  lng: number | null;
};

type NearbyCourse = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  distance: number;
};

type TeeData = {
  id: string;
  name: string;
  gender: string;
  rating: number;
  slope: number;
  par: number;
  holes: { holeNumber: number; par: number; strokeIndex: number }[];
};

type CourseData = {
  id: string;
  name: string;
  city: string | null;
  state: string | null;
  tees: TeeData[];
};

type HoleScore = {
  holeNumber: number;
  par: number;
  strokeIndex: number;
  score: number | null;
};

export function RoundForm() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createRound, null);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchCourse[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchMode, setSearchMode] = useState<"search" | "location">("search");

  const [nearbyCourses, setNearbyCourses] = useState<NearbyCourse[]>([]);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [radiusMiles, setRadiusMiles] = useState(10);

  const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
  const [isLoadingCourse, setIsLoadingCourse] = useState(false);
  const [selectedTeeId, setSelectedTeeId] = useState<string | null>(null);

  const [datePlayed, setDatePlayed] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [holesPlayed, setHolesPlayed] = useState(18);
  const [courseHandicapSource, setCourseHandicapSource] = useState<
    "INDEX" | "MANUAL"
  >("INDEX");
  const [courseHandicap, setCourseHandicap] = useState("");
  const [notes, setNotes] = useState("");
  const [holeScores, setHoleScores] = useState<HoleScore[]>([]);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (query.length < 2) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const res = await fetch(
          `/api/courses/search?q=${encodeURIComponent(query)}`,
        );
        const data = await res.json();
        setSearchResults(Array.isArray(data) ? data : []);
      } catch {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  const handleSearchSelect = useCallback(
    async (course: SearchCourse) => {
      setIsLoadingCourse(true);
      try {
        const full = await ensureCourseCached(course.id);
        setSelectedCourse(full);
        setSelectedTeeId(null);
        setHoleScores([]);
        setQuery(full.name);
        setSearchResults([]);
      } catch {
        setLocationError("Failed to load course data");
      } finally {
        setIsLoadingCourse(false);
      }
    },
    [],
  );

  const handleNearbySelect = useCallback(
    async (course: NearbyCourse) => {
      setIsLoadingCourse(true);
      try {
        const full = await ensureCourseCached(String(course.id));
        setSelectedCourse(full);
        setSelectedTeeId(null);
        setHoleScores([]);
        setSearchMode("search");
        setQuery(full.name);
        setNearbyCourses([]);
      } catch {
        setLocationError("Failed to load course data");
      } finally {
        setIsLoadingCourse(false);
      }
    },
    [],
  );

  const handleUseLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      return;
    }
    setIsLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const res = await fetch(
            `/api/courses/nearby?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&radiusMiles=${radiusMiles}`,
          );
          const data = await res.json();
          setNearbyCourses(Array.isArray(data) ? data : []);
        } catch {
          setLocationError("Failed to find nearby courses");
        } finally {
          setIsLocating(false);
        }
      },
      () => {
        setLocationError("Location access denied");
        setIsLocating(false);
      },
    );
  }, [radiusMiles]);

  const selectedTee = selectedCourse?.tees.find((t) => t.id === selectedTeeId);

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
      courseHandicapSource === "MANUAL" ? Number(courseHandicap) || 0 : 0;
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
      {/* Course search / location */}
      <div>
        <div className="mb-2 flex gap-2">
          <button
            type="button"
            onClick={() => setSearchMode("search")}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              searchMode === "search"
                ? "bg-[var(--gold)]/10 text-[var(--gold)]"
                : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
            }`}
          >
            Search courses
          </button>
          <button
            type="button"
            onClick={() => setSearchMode("location")}
            className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
              searchMode === "location"
                ? "bg-[var(--gold)]/10 text-[var(--gold)]"
                : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
            }`}
          >
            Use my location
          </button>
        </div>

        {searchMode === "search" ? (
          <>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              disabled={isLoadingCourse}
              className="w-full rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-2 text-sm text-[var(--foreground)] outline-none focus:border-[var(--gold)] disabled:opacity-50"
            />
            {(isSearching || searchResults.length > 0) && query.length >= 2 && (
              <div className="mt-1 max-h-40 overflow-y-auto rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)]">
                {isSearching ? (
                  <div className="px-3 py-2 text-sm text-[var(--text-secondary)]">
                    Searching...
                  </div>
                ) : (
                  searchResults.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSearchSelect(c)}
                      disabled={isLoadingCourse}
                      className="w-full px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--green-deep)] disabled:opacity-50"
                    >
                      {c.name}
                      {c.city && (
                        <span className="ml-2 text-[var(--text-secondary)]">
                          {c.city}
                          {c.state && `, ${c.state}`}
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <label className="text-xs text-[var(--text-secondary)]">
                  Radius:
                </label>
                <select
                  value={radiusMiles}
                  onChange={(e) => setRadiusMiles(Number(e.target.value))}
                  className="rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-2 py-1.5 text-xs text-[var(--foreground)] outline-none focus:border-[var(--gold)]"
                >
                  <option value={5}>5 mi</option>
                  <option value={10}>10 mi</option>
                  <option value={25}>25 mi</option>
                  <option value={50}>50 mi</option>
                </select>
              </div>
              <button
                type="button"
                onClick={handleUseLocation}
                disabled={isLocating}
                className="rounded bg-[var(--green)] px-3 py-1.5 text-xs font-medium text-[var(--background)] transition-colors hover:bg-[var(--green-soft)] disabled:opacity-50"
              >
                {isLocating ? "Finding..." : "Find nearby"}
              </button>
            </div>
            {locationError && (
              <p className="text-xs text-red-400">{locationError}</p>
            )}
            {nearbyCourses.length > 0 && (
              <div className="max-h-40 overflow-y-auto rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)]">
                {nearbyCourses.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleNearbySelect(c)}
                    disabled={isLoadingCourse}
                    className="w-full px-3 py-2 text-left text-sm text-[var(--foreground)] transition-colors hover:bg-[var(--green-deep)] disabled:opacity-50"
                  >
                    {c.name}
                    <span className="ml-2 text-[var(--text-secondary)]">
                      {c.distance.toFixed(1)} mi
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {isLoadingCourse && (
          <div className="mt-2 text-xs text-[var(--text-secondary)]">
            Loading course data...
          </div>
        )}
      </div>

      {/* Selected course display */}
      {selectedCourse && (
        <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-3">
          <div className="text-sm font-medium text-[var(--foreground)]">
            {selectedCourse.name}
          </div>
          {selectedCourse.city && (
            <div className="text-xs text-[var(--text-secondary)]">
              {selectedCourse.city}
              {selectedCourse.state && `, ${selectedCourse.state}`}
            </div>
          )}
          <div className="mt-1 text-xs text-[var(--text-secondary)]">
            {selectedCourse.tees.length} tee
            {selectedCourse.tees.length !== 1 ? "s" : ""} available
          </div>
        </div>
      )}

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
                onClick={() => {
                  setSelectedTeeId(t.id);
                  setHoleScores([]);
                }}
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
