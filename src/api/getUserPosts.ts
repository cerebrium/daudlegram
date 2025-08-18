import { getPostsById } from "@/service/posts";

export async function getUserPosts(id: string) {
  return await getPostsById(id);
}
