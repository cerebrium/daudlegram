import { prisma } from "@/prisma/prisma";

export function getLikesByIds(postList: Array<string>) {
  return prisma.like.findMany({
    where: {
      id: {
        in: postList,
      },
    },
  });
}
