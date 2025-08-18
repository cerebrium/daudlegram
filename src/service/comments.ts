"use server";

import { commentFromPostId } from "@/dao/comments/comments";

export async function getCommentsFromPostId(id: string) {
  return await commentFromPostId(id);
}
