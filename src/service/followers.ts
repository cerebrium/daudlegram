import { findUsers } from "@/dao/user/user";

export type FollowerList = {
  id: string;
  createdAt: Date;
  followerId: string;
  followingId: string;
}[];

export async function getFollowersDetails(followerList: FollowerList) {
  return await findUsers(followerList.map((f) => f.followerId));
}
