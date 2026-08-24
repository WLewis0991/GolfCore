import Link from "next/link";

import { getCourses } from "@/lib/actions/courses-list";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="font-[var(--font-display)] text-2xl font-bold text-[var(--foreground)]">
          Courses
        </h1>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {courses.length} cached course{courses.length !== 1 ? "s" : ""}
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="rounded border border-[var(--text-tertiary)]/20 bg-[var(--surface)] p-12 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            No courses cached yet.
          </p>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">
            Courses are cached when you log a round.
          </p>
          <Link
            href="/rounds/new"
            className="mt-4 inline-block rounded bg-[var(--green)] px-5 py-2 text-xs font-semibold text-[var(--background)] transition-colors hover:bg-[var(--green-soft)]"
          >
            Add a round
          </Link>
        </div>
      ) : (
        <div className="space-y-px">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex items-center justify-between rounded bg-[var(--surface)] px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-[var(--foreground)]">
                  {course.name}
                </p>
                {(course.city || course.state) && (
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">
                    {[course.city, course.state].filter(Boolean).join(", ")}
                  </p>
                )}
              </div>
              <span className="font-[var(--font-mono)] text-xs text-[var(--text-secondary)]">
                {course.teeCount} tee{course.teeCount !== 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
