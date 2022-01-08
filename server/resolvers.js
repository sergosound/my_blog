const db = require('./database');

const resolvers = {
    Query: {
        getUser: ({ id }) => {
            console.log('|| getUser', id);
            return db.getUser(id);
        },
        getAllUsers: () => {
            console.log('|| getAllUsers');
            return db.getAllUsers();
        },
    },
    Mutation: {
        createUser: (_, { input }) => db.createUser(input),
    },
};

module.exports = resolvers;
