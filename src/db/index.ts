import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as schema from "./schema";
import postgres from "postgres";

const queryCleint = postgres(process.env.DATABASE_URL!, { prepare: false });
export const db = drizzle(queryCleint);

(async() => {
    await migrate(db, { migrationsFolder: "drizzle" });
    await queryCleint.end();
})();
