"use server";

import { getCommentsFromPostId } from "@/service/comments";

export async function getPostComments(id: string) {
  return await getCommentsFromPostId(id);
}
