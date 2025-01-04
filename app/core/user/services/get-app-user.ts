import { getKindeSession, } from "@kinde-oss/kinde-remix-sdk";
import type { KindeUser } from "@kinde-oss/kinde-remix-sdk/types";
import { eq } from "drizzle-orm";
import { db } from "~/core/turso/db";
import { mUsers } from "~/models/users";

type AppUser = KindeUser & {
  turso: {
    id: number
  }
}

export async function getAppUser(request: Request): Promise<AppUser | undefined> {
  const { getUser } = await getKindeSession(request);
  const user = await getUser();
  if (!user) return undefined;

  const dbUser = await db.select().from(mUsers).where(eq(mUsers.auth_id, user.id)).limit(1).get();
  if (!dbUser) return undefined;

  return {
    ...user,
    turso: {
      id: dbUser.id,
    },
  } satisfies AppUser;
}
