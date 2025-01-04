CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`authId` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_authId_unique` ON `users` (`authId`);