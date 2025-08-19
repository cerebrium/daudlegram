"use server";

import { createComment } from "@/service/comments";
import { getCurrentUserFromRequest } from "@/service/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const commentData = z.object({
  postId: z.string(),
  content: z.string(),
  path: z.string(),
});

type CommentState = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function addComment(
  _: CommentState | null,
  formData: FormData,
): Promise<CommentState> {
  const user = await getCurrentUserFromRequest();

  if (!user) {
    redirect("/");
  }

  try {
    const postId = formData.get("postId");
    const content = formData.get("content");
    const path = formData.get("path");

    const data = commentData.parse({
      postId,
      content,
      path,
    });

    if (!data.content.trim()) {
      return {
        success: false,
        error: "Comment cannot be empty",
      };
    }

    await createComment(data.content, user.id, data.postId);
    revalidatePath(data.path);

    return {
      success: true,
      message: "Comment added successfully!",
    };
  } catch (e) {
    console.error("Error adding comment:", e);
    return {
      success: false,
      error: e instanceof Error ? e.message : "Failed to add comment",
    };
  }
}
