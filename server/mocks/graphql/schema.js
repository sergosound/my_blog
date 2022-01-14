const Types = require("../../api/graphql/types");
const Query = require("./queries");
const Mutation = require("./mutations");

module.exports = {
  typeDefs: Types,
  resolvers: {
    Query,
    Mutation,
  },
};
