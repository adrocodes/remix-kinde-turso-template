ALTER TABLE `users` RENAME COLUMN "authId" TO "auth_id";--> statement-breakpoint
DROP INDEX `users_authId_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `users_auth_id_unique` ON `users` (`auth_id`);