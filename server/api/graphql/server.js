const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("apollo-server-express");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { typeDefs, resolvers } = require("./schema");

async function createApolloServer({ app, httpServer }) {
  let subscriptionServer;
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  app.use(cors());
  app.use("/graphql", graphqlHTTP({ graphiql: true, schema }));

  const server = new ApolloServer({
    mocks: true,
    schema,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
    context: () => ({ abs: 123 }),
  });

  subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect(connectionParams, webSocket, context) {
        console.log("Connected");
      },
      onDisconnect(webSocket, context) {
        console.log("Disconnected");
      },
    },
    { server: httpServer, path: server.graphqlPath }
  );

  await server.start();
  server.applyMiddleware({ app, url: "/api/graphql" });

  /**
   * We return a reference to`httpServer` instead of `server` because we need
   * to listen `httpServer` and not `server`.
   * Here `server` is the result `new ApolloServer(...)`.
   */
  return httpServer;
}

module.exports = createApolloServer;
