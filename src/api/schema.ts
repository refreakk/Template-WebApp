import { foreignKey, integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable('Users', {
    id: integer('id').primaryKey(),
    first_name: varchar('first_name'),
    last_name: varchar('last_name'),
    username: varchar('usernames'),
    // добавить время создания
    // добавить время обновления
});