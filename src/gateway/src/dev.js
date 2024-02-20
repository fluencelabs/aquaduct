import fastify from "fastify";

const server = fastify({
  logger: true,
});

await server.register(import("./app/index.js"));

server.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
  if (err !== null) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server listening at ${address}`);
});