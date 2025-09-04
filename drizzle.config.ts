import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.tsx",

  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_IKR4wAWdFt0g@ep-curly-paper-ad3koihn-pooler.c-2.us-east-1.aws.neon.tech/MagicTales?sslmode=require&channel_binding=require',
  },

  strict: true,
  verbose: true,
});
