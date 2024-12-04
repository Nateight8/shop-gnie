import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

const client = neon(process.env.DATABASE_URL!);
const db = drizzle(client);

export { db };
