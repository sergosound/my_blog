const mocks = {
  Query: {
    getAllUsers: () => [{ id: 1, name: "mock name", age: 777, posts: [] }],
  },
  Mutations: {
    createUser: (user) => user,
  },
};
