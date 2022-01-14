const { ApolloServer, gql } = require("apollo-server");

const createMockApolloServer = ({ schema, mocks = true }) =>
  new ApolloServer({
    schema,
    mocks,
  });

module.exports = createMockApolloServer;
