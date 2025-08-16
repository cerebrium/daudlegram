import { prisma } from "@/prisma/prisma";
import { Follow } from "@prisma/client";

export type UserWithFollowing = {
  id: string;
  following: Follow[];
};

export function getFollowersPosts(user: UserWithFollowing, cursor: number = 0) {
  return prisma.post.findMany({
    where: {
      userId: {
        in: user.following.map((following) => following.followerId),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
    skip: cursor,
  });
}
