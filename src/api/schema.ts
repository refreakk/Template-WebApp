import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const Users = pgTable('Users', {
    id: integer('id').primaryKey(),
    first_name: text('first_name'),
    last_name: text('last_name'),
    username: text('usernames'),
});