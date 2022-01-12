const express = require("express");
const http = require("http");
const createApolloServer = require("./api/graphql/server");

const PORT = process.env.PORT || 5000;

(async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const apolloServer = await createApolloServer(app, httpServer);

  const message = `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`;
  const logger = () => console.log(message);

  httpServer.listen(PORT, logger);
})();
