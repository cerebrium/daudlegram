"use server";

import { prisma } from "@/prisma/prisma";

export async function commentFromPostId(id: string) {
  return await prisma.comment.findMany({
    where: {
      postId: id,
    },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createCommentForPost(
  content: string,
  userId: string,
  postId: string,
) {
  return prisma.comment.create({
    data: {
      content,
      userId,
      postId,
    },
  });
}
