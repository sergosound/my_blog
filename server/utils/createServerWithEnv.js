const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs, resolvers } = require("../api/graphql/schema");
const createApolloServerWithExpress = require("../api/graphql/server");
const createMockApolloServer = require("../mocks/server/apolloServer");
const { IS_MOCK, IS_DEV } = require("./constants");

const createServerWithEnv = async (app, httpServer) => {
  let server;
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  if (IS_MOCK) {
    server = createMockApolloServer({ schema });
  }

  if (IS_DEV) {
    server = await createApolloServerWithExpress({ schema, app, httpServer });
  }

  if (!server) {
    throw "Server is not initialized";
  }

  return server;
};

module.exports = createServerWithEnv;
