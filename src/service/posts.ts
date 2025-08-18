import { getPostsByUserId } from "@/dao/posts/posts";

export function getPostsById(id: string) {
  return getPostsByUserId(id);
}
