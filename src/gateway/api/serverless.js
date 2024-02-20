import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();

const server = fastify({
  logger: true,
});

await server.register(import("../src/app/index.js"));

export default async function (req, res) {
  await server.ready();
  server.server.emit("request", req, res);
}