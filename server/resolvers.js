const db = require('./database');

const resolvers = {
    Query: {
        getUser: ({ id }) => db.getUser(id),
        getAllUsers: () => db.getAllUsers(),
    },
    Mutation: {
        createUser: (_, { input }) => db.createUser(input),
    },
};

module.exports = resolvers;
