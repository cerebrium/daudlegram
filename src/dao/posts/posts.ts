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
    include: {
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
      user: {
        select: {
          username: true,
          displayName: true,
        },
      },
    },

    take: 30,
    skip: cursor,
  });
}

export function getPostsByUserId(id: string, cursor: number = 0) {
  return prisma.post.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
      user: {
        select: {
          username: true,
          displayName: true,
        },
      },
    },
    take: 30,
    skip: cursor,
  });
}
