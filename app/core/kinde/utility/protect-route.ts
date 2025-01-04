import { getKindeSession } from "@kinde-oss/kinde-remix-sdk";
import { redirect } from "react-router";
import { KINDE_LOGIN_PATH } from "../constants";

/**
 * Protects a route by checking if the user is authenticated.
 * If the user is not authenticated, it will redirect to the login page.
 * 
 * This function is used in the loader function of a route. You can do this
 * at a per route basis or a higher level layout.
 * 
 * You must import this function in the loader function of a route.
 * 
 * Example:
 * ```tsx
 * import { protectRoute } from "~/core/kinde/utility/protect-route";
 * 
 * export async function loader({ request }: LoaderFunctionArgs) {
 *  const { headers } = await protectRoute(request);
 * 
 *  return json({...}, { headers });
 * }
 * ```
 * 
 * @see https://docs.kinde.com/developer-tools/sdks/backend/remix-sdk/#protect-routes
 * @param request The request object.
 * @returns The headers object.
 */
export async function protectRoute(request: Request) {
  const { headers, isAuthenticated } = await getKindeSession(request);
  const isLoggedIn = await isAuthenticated()
  
  if (!isLoggedIn) {
    throw redirect(KINDE_LOGIN_PATH)
  }

  return { headers }
}
