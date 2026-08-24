import { prisma } from "@/lib/prisma";

export async function getCourses() {
  const courses = await prisma.course.findMany({
    include: {
      tees: {
        select: { id: true },
      },
    },
    orderBy: { name: "asc" },
  });

  return courses.map((c) => ({
    id: c.id,
    name: c.name,
    city: c.city,
    state: c.state,
    teeCount: c.tees.length,
  }));
}
