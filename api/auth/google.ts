// Explicit Vercel route for the OAuth authorization start endpoint.
// The shared bundled Express app owns the actual route logic.
// @ts-expect-error The generated .mjs file is created during the Vercel build.
import app from "../studysync-app.mjs";

export default app;
