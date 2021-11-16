const fastify = require("fastify")({ logger: true });
require("dotenv-safe").config();

fastify.register(require("fastify-routes"));
fastify.register(require("fastify-cors"), {
  origin: "*",
  methods: ["GET", "POST"],
});

// register routes
[...require("./tweets/tweet.controller")].forEach(fastify.route.bind(fastify));

fastify.get("/ping", (request, reply) => {
  reply.send("pong");
});

// run server
(async () => {
  // Run the server!
  const host = process.env.HOST_IP;
  const port = process.env.HOST_PORT;

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });
})();

module.exports = fastify;
