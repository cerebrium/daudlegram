"use server";

import { syncClerkAndDbUser } from "@/service/user";
import { LRU } from "@/utils";
import { currentUser } from "@clerk/nextjs/server";

const lru = new LRU(100);

export async function syncUser() {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    throw new Error("no user in syncUser");
  }

  if (lru.hasUser(clerkUser.id)) {
    return;
  }

  syncClerkAndDbUser(clerkUser);
}
