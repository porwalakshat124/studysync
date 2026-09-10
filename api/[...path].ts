// The Vercel build script generates this sibling bundle before the function
// compiler runs. Keeping the runtime entrypoint small avoids Node 24 ESM
// resolution failures for extensionless local TypeScript imports.
// @ts-expect-error The generated .mjs file is created by scripts/build-vercel.mjs.
import app from "./studysync-app.mjs";

export default app;
