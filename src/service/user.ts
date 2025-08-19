"use server";

import { getUserById, makeUser, userDaoGetUserById } from "@/dao/user/user";
import { currentUser, type User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";

import { type Prisma } from "@prisma/client";
import { type User as clientUser } from "@prisma/client";

// NEW: Request-scoped cached Clerk user access
export const getCurrentClerkUser = cache(async (): Promise<User | null> => {
  return await currentUser();
});

export async function getCurrentUserFromRequest(): Promise<clientUser | null>;
export async function getCurrentUserFromRequest<T extends Prisma.UserSelect>(
  select: T,
): Promise<Prisma.UserGetPayload<{ select: T }> | null>;
export async function getCurrentUserFromRequest(
  select?: Prisma.UserSelect,
): Promise<any> {
  const clerkUser = await getCurrentClerkUser();

  if (!clerkUser) {
    return redirect("/");
  }

  const user = await getUserById(clerkUser.id, select);
  if (!user) {
    return null;
  }

  return user;
}

export async function syncClerkAndDbUser(clerkUser: User) {
  return await makeUser(clerkUser);
}

export async function getUserDetailsById(id: string) {
  return userDaoGetUserById(id);
}
