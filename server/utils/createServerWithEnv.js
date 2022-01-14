const createApolloServerWithExpress = require("../api/graphql/server");
const createMockApolloServer = require("../mocks/server");
const { IS_DEV, IS_MOCK } = require("./constants");

const createServerWithEnv = async (app, httpServer) => {
  let server;

  if (IS_MOCK) {
    server = createMockApolloServer();
  }

  if (IS_DEV) {
    server = await createApolloServerWithExpress({ app, httpServer });
  }

  if (!server) {
    throw new Error("Server is not initialized");
  }

  return server;
};

module.exports = createServerWithEnv;
