const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");
const { execute, subscribe } = require("graphql");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

async function createApolloServer(app, httpServer) {
  let subscriptionServer;
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  app.use(cors());
  app.use("/graphql", graphqlHTTP({ graphiql: true, schema }));

  const server = new ApolloServer({
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
    context: async ({ req, res }) => {
      console.log("|| context ||", { req, res });
      return { abs: 123 };
    },
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

  return server;
}

module.exports = createApolloServer;
