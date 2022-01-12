const Types = require("./types");
const Query = require("./queries");
const Mutation = require("./mutations");

const schema = {
  typeDefs: Types,
  resolvers: {
    Query,
    Mutation,
  },
};

module.exports = schema;
