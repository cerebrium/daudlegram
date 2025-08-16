"use server";

import { getUserById, makeUser } from "@/dao/user/user";
import { currentUser, type User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { type Prisma } from "@prisma/client";
import { type User as clientUser } from "@prisma/client";

export async function getCurrentUserFromRequest(): Promise<clientUser | null>;
export async function getCurrentUserFromRequest<T extends Prisma.UserSelect>(
  select: T,
): Promise<Prisma.UserGetPayload<{ select: T }> | null>;
export async function getCurrentUserFromRequest(
  select?: Prisma.UserSelect,
): Promise<any> {
  const clerkUser = await currentUser();

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
