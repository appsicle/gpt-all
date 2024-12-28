import postgres from "postgres";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "";
export const sql = postgres(connectionString);

export const config = {
  port: process.env.PORT,
  supabase: {
    url: connectionString,
    key: process.env.DATABASE_KEY || "",
  },
};
