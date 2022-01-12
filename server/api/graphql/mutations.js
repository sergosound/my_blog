const db = require("../../database");

module.exports = {
  createUser: (_, { input }) => db.createUser(input),
};
