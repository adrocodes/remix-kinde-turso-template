import { KINDE_LOGIN_PATH, KINDE_LOGOUT_PATH, KINDE_REGISTER_PATH } from "~/core/kinde/constants";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Link to={KINDE_LOGIN_PATH}>Login</Link>
      <Link to={KINDE_REGISTER_PATH}>Register</Link>
      <Link to={KINDE_LOGOUT_PATH}>Logout</Link>
    </div>
  )
}
