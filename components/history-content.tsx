"use client";

import { useMemo, useState } from "react";

import { IndexChart } from "@/components/index-chart";
import { exportToCSV, exportToJSON } from "@/lib/utils/export";
import { formatDifferential, formatHandicap } from "@/lib/utils/format";

export interface HistoryDataPoint {
  date: string;
  dateLabel: string;
  index: number | null;
  course: string;
  tee: string;
  score: number;
  differential: number;
}

interface HistoryContentProps {
  data: HistoryDataPoint[];
}

export function HistoryContent({ data }: HistoryContentProps) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  const courses = useMemo(
    () => [...new Set(data.map((d) => d.course))].sort(),
    [data],
  );

  const filtered = useMemo(() => {
    return data.filter((d) => {
      if (dateFrom && d.date < dateFrom) return false;
      if (dateTo && d.date > dateTo + "T23:59:59") return false;
      if (courseFilter && d.course !== courseFilter) return false;
      return true;
    });
  }, [data, dateFrom, dateTo, courseFilter]);

  const hasFilters = dateFrom || dateTo || courseFilter;

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-[var(--text-secondary)] uppercase">
            From
          </label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--foreground)] outline-none transition-colors focus:border-[var(--green)]"
          />
        </div>
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-[var(--text-secondary)] uppercase">
            To
          </label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--foreground)] outline-none transition-colors focus:border-[var(--green)]"
          />
        </div>
        <div>
          <label className="mb-1 block text-[11px] font-semibold tracking-wide text-[var(--text-secondary)] uppercase">
            Course
          </label>
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="rounded border border-[var(--text-tertiary)]/30 bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--foreground)] outline-none transition-colors focus:border-[var(--green)]"
          >
            <option value="">All courses</option>
            {courses.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setDateFrom("");
              setDateTo("");
              setCourseFilter("");
            }}
            className="rounded px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            Clear filters
          </button>
        )}
        {filtered.length > 0 && (
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={() => exportToCSV(filtered)}
              className="rounded border border-[var(--text-tertiary)]/30 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--green)] hover:text-[var(--foreground)]"
            >
              Export CSV
            </button>
            <button
              type="button"
              onClick={() => exportToJSON(filtered)}
              className="rounded border border-[var(--text-tertiary)]/30 px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--green)] hover:text-[var(--foreground)]"
            >
              Export JSON
            </button>
          </div>
        )}
      </div>

      {/* Chart */}
      {filtered.length < 3 ? (
        <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-12 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            {hasFilters
              ? "No matching rounds to chart."
              : "Need at least 3 rounds to show your index history."}
          </p>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">
            {filtered.length} round{filtered.length !== 1 ? "s" : ""} found.
          </p>
        </div>
      ) : (
        <IndexChart data={filtered} />
      )}

      {/* Rounds table */}
      {filtered.length > 0 && (
        <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)]">
          <div className="border-b border-[var(--text-tertiary)]/20 px-4 py-3">
            <h2 className="text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
              Rounds ({filtered.length})
            </h2>
          </div>
          <div className="divide-y divide-[var(--text-tertiary)]/10">
            {[...filtered].reverse().map((d) => (
              <div
                key={d.date}
                className="flex items-center justify-between px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[var(--text-secondary)]">
                    {new Date(d.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--foreground)]">
                    {d.course}
                  </span>
                  <span className="text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {d.tee}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-[var(--font-mono)] text-xs text-[var(--foreground)]">
                    {d.score}
                  </span>
                  <span className="font-[var(--font-mono)] text-xs text-[var(--text-secondary)]">
                    {formatDifferential(d.differential)}
                  </span>
                  <span className="font-[var(--font-mono)] text-xs text-[var(--gold)]">
                    {formatHandicap(d.index)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
