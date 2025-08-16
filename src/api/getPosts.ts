"use server";
// This is to get the top 20 posts that

import { getFollowersPosts, type UserWithFollowing } from "@/dao/posts/posts";
import { getCurrentUserFromRequest } from "@/service/user";

// are from the people who who you follow
export async function getFollowedPosts() {
  const user = await getCurrentUserFromRequest({
    id: true,
    following: true,
  });
  console.log("what is the user: ", user);

  if (!user) {
    return null;
  }

  return await getFollowersPosts(user);
}
