import { handleAuth } from "@kinde-oss/kinde-remix-sdk"
import { type LoaderFunctionArgs } from "react-router"

export async function loader({ params, request }: LoaderFunctionArgs) {
  return await handleAuth(request, params.index)
}
