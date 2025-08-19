"use server";

import {
  commentFromPostId,
  createCommentForPost,
} from "@/dao/comments/comments";

export async function getCommentsFromPostId(id: string) {
  return await commentFromPostId(id);
}

export async function createComment(
  content: string,
  userId: string,
  postId: string,
) {
  return createCommentForPost(content, userId, postId);
}
