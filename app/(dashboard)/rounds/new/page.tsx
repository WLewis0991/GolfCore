import { RoundForm } from "@/components/round-form";
import { prisma } from "@/lib/prisma";

export default async function NewRoundPage() {
  const courses = await prisma.course.findMany({
    include: { tees: { include: { holes: { orderBy: { holeNumber: "asc" } } } } },
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
        Add round
      </h1>
      <RoundForm courses={courses} />
    </div>
  );
}
