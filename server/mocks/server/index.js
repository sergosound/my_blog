const { ApolloServer } = require("apollo-server");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs, resolvers } = require("../../mocks/graphql/schema");

const createMockApolloServer = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  return new ApolloServer({
    schema,
    mocks: true,
  });
};

module.exports = createMockApolloServer;
