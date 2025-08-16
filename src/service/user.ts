"use server";

import { getUserById } from "@/dao/user";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";

export async function getCurrentUserFromRequest(): Promise<User> {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return redirect("/");
  }

  const user = await getUserById(clerkUser.id);
  if (!user) {
    return redirect("/");
  }

  return user;
}
