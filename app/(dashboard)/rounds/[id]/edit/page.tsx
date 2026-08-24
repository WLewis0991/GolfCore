import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

import { EditRoundForm } from "@/components/edit-round-form";
import { prisma } from "@/lib/prisma";

export default async function EditRoundPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { userId } = await auth();
  if (!userId) notFound();

  const round = await prisma.round.findUnique({
    where: { id },
    include: {
      holeScores: { orderBy: { holeNumber: "asc" } },
      tee: { include: { course: true, holes: { orderBy: { holeNumber: "asc" } } } },
    },
  });

  if (!round || round.userId !== userId) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-6 text-[11px] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
        Edit round
      </h1>
      <EditRoundForm round={round} />
    </div>
  );
}
