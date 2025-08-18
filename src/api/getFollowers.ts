import { getFollowersDetails } from "@/service/followers";
import { getCurrentUserFromRequest } from "@/service/user";

export async function getFollowers() {
  const user = await getCurrentUserFromRequest({
    id: true,
    following: true,
  });

  if (!user) {
    throw new Error("no user");
  }

  return await getFollowersDetails(user.following);
}
