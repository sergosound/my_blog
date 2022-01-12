const { buildSchema } = require("graphql");

const User = `
  type User {
    id: ID
    name: String
    age: Int
    posts: [Post]
  }
`;

const Post = `
  type Post {
    id: ID
    title: String
    content: String
  }
`;

const UserInput = `
  input UserInput {
    id: ID
    name: String!
    age: Int!
    posts: [PostInput]
  }
`;

const PostInput = `
  input PostInput {
    id: ID
    title: String!
    content: String!
  }
`;

module.exports = buildSchema(`
    ${User}
    ${Post}
    ${UserInput}
    ${PostInput}
  
    type Query {
      getUser(id: ID): User
      getAllUsers: [User]
    }
    
    type Mutation {
      createUser(input: UserInput): User
    }
`);
