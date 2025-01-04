import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

export const mUsers = sqliteTable("users", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  auth_id: text().notNull().unique(),
})
