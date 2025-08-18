import { getUserDetailsById } from "@/service/user";

export async function getUserDetails(id: string) {
  return await getUserDetailsById(id);
}
