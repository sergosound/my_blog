const db = require("../../database");

module.exports = {
  getUser: ({ id }) => {
    console.log("|| getUser", id);
    return db.getUser(id);
  },
  getAllUsers: (...props) => {
    console.log("|| getAllUsers", props[2]);
    return db.getAllUsers();
  },
};
