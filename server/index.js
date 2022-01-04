const {ApolloServer} = require('apollo-server-express');
const express = require('express');
const http = require('http');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const {execute, subscribe} = require('graphql');
const {SubscriptionServer} = require('subscriptions-transport-ws');
const {makeExecutableSchema} = require('@graphql-tools/schema');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');

const PORT = 5000;

(async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers
    });

    app.use(cors());
    app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema,
        plugins: [{
            async serverWillStart() {
                return {
                    async drainServer() {
                        subscriptionServer.close();
                    }
                }
            }
        }],
    });

    const subscriptionServer = SubscriptionServer.create(
        {
            schema,
            execute,
            subscribe,
            onConnect(connectionParams, webSocket, context) {
                console.log('Connected');
            },
            onDisconnect(webSocket, context) {
                console.log('Disconnected');
            },
        },
        {server: httpServer, path: server.graphqlPath}
    );

    await server.start();
    server.applyMiddleware({ app, path: '/' });

    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });
})();
