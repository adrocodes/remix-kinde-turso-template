import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes"

export default [
  // WEB ROUTES
  index("routes/home.tsx"),

  // AUTH ROUTES
  layout("core/kinde/ui/protected-layout.tsx", [
    route("dashboard", "routes/dashboard/index.tsx"),
  ]),

  // API ROUTES
  route("kinde-auth/:index", "routes/kinde-auth/index.tsx"),
  ...prefix("api/v1", [
    ...prefix("kinde", [
      route(
        "webhook/user.created",
        "routes/api/v1/kinde/webhook/user.created/index.tsx",
      ),
    ]),
  ]),
] satisfies RouteConfig
