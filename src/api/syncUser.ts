"use server";

import { syncClerkAndDbUser, getCurrentClerkUser } from "@/service/user";
import { LRU } from "@/utils";

const lru = new LRU(100);

export async function syncUser() {
  const clerkUser = await getCurrentClerkUser();

  if (!clerkUser) {
    throw new Error("no user in syncUser");
  }

  if (lru.hasUser(clerkUser.id)) {
    return;
  }

  syncClerkAndDbUser(clerkUser);
}
