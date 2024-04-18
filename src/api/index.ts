import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const queryCleint = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryCleint, { schema });