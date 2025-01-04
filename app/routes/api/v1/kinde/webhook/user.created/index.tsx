import type { ActionFunctionArgs } from "react-router"
import { verifyKindeWebhookRequest } from "~/core/kinde/webhooks/verify-request"
import { TryAsync, Unwrap } from "~/core/utils/result"
import { z } from "zod"
import { db } from "~/core/turso/db"
import { mUsers } from "~/models/users"

const Payload = z.object({
  data: z.object({
    user: z.object({
      id: z.string().min(1),
    }),
  }),
})

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 })
  }

  const rEvent = await TryAsync(verifyKindeWebhookRequest)(request)
  const pPayload = Payload.parse(Unwrap(rEvent))

  await db.insert(mUsers).values({
    auth_id: pPayload.data.user.id,
  })

  return Response.json({ success: true })
}
