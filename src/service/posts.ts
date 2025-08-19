"use server";
import { createNewPost, getPostsByUserId } from "@/dao/posts/posts";

export async function getPostsById(id: string) {
  return getPostsByUserId(id);
}

export async function createPost(content: string, userId: string) {
  return createNewPost(content, userId);
}
