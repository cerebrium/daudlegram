import { createPost } from "@/service/posts";
import { revalidatePath } from "next/cache";

export async function addPost(content: string, userId: string, path: string) {
  await createPost(content, userId);

  revalidatePath(path);
}
