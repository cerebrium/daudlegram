"use server";

import { prisma } from "@/prisma/prisma";
import { User } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";

export async function getUserById(id: string, select?: Prisma.UserSelect) {
  return await prisma.user.findUnique({
    where: {
      clerkId: id,
    },
    ...(select && { select }),
  });
}

// We want to automagically make a db user when
// they login through clerk
export async function makeUser(clerkUser: User) {
  try {
    return await prisma.user.upsert({
      where: {
        clerkId: clerkUser.id,
      },
      create: {
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        username:
          clerkUser.username ||
          clerkUser.emailAddresses[0]?.emailAddress.split("@")[0] ||
          `user_${clerkUser.id.slice(-8)}`,
        displayName:
          clerkUser.firstName && clerkUser.lastName
            ? `${clerkUser.firstName}
${clerkUser.lastName}`
            : clerkUser.firstName || clerkUser.lastName || null,
        avatar: clerkUser.imageUrl || null,
        verified:
          clerkUser.emailAddresses[0]?.verification?.status === "verified" ||
          false,
      },
      update: {
        email: clerkUser.emailAddresses[0]?.emailAddress || "",
        displayName:
          clerkUser.firstName && clerkUser.lastName
            ? `${clerkUser.firstName}
${clerkUser.lastName}`
            : clerkUser.firstName || clerkUser.lastName || null,
        avatar: clerkUser.imageUrl || null,
        verified:
          clerkUser.emailAddresses[0]?.verification?.status === "verified" ||
          false,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

export async function findUsers(userIds: Array<string>) {
  return prisma.user.findMany({
    where: {
      id: {
        in: userIds,
      },
    },
  });
}

export async function userDaoGetUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          following: true,
        },
      },
    },
  });
}
