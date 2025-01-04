import { data, Outlet, type LoaderFunctionArgs } from "react-router";
import { protectRoute } from "../utility/protect-route";

export async function loader({ request }: LoaderFunctionArgs) {
  const { headers } = await protectRoute(request);
  return data(null, { headers })
}

export default function ProtectedLayout() {
  return <><Outlet /></>
}
