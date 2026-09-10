import "dotenv/config";
import { createStudySyncApp } from "./app";

/**
 * Source entry used only by scripts/build-vercel.mjs. Vercel receives the
 * generated api/studysync-app.mjs bundle, which embeds local server modules.
 */
const app = createStudySyncApp();

export default app;
