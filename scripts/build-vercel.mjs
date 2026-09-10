import { execFileSync } from "node:child_process";

const run = (command, args) => {
  execFileSync(command, args, { stdio: "inherit", cwd: process.cwd() });
};

// Build the browser application first.
run("pnpm", ["exec", "vite", "build"]);

// Vercel's Node 24 runtime does not resolve extensionless ESM imports left
// inside api/[...path].ts. Bundle local server/shared modules into a stable
// sibling ESM file while keeping installed packages external for Vercel.
run("pnpm", [
  "exec",
  "esbuild",
  "server/vercel-entry.ts",
  "--bundle",
  "--platform=node",
  "--packages=external",
  "--format=esm",
  "--target=node20",
  "--outfile=api/studysync-app.mjs",
]);
