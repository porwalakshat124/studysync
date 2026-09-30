import { createServer } from "node:http";
createServer((req, res) => { res.writeHead(req.url === "/health" ? 200 : 503); res.end(req.url === "/health" ? "healthy" : "unhealthy"); }).listen(3000, "0.0.0.0");
