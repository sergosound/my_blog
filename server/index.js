const express = require("express");
const http = require("http");
const createServerWithEnv = require("./utils/createServerWithEnv");
const { PORT } = require("./utils/constants");

const logger = () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);

(async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  try {
    const server = await createServerWithEnv(app, httpServer);
    await server.listen(logger);
  } catch (error) {
    console.log(new Error(error));
  }
})();
