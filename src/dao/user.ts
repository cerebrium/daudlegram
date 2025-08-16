"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getUserById(id: string, select?: Prisma.UserSelect) {
  return await prisma.user.findUnique({
    where: {
      clerkId: id,
    },
    ...(select && { select }),
  });
}
