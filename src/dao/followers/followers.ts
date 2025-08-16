import { prisma } from "@/prisma/prisma";

export function getFollowersList(user: string) {
  return prisma.follow.findMany({
    where: {
      followerId: user,
    },
    select: {
      followingId: true,
    },
  });
}
