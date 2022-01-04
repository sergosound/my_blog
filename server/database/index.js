const defaultUsers = [
    {id: 1, name: 'Sergey', age: 26, posts: [] },
    {id: 2, name: 'Anton', age: 25, posts: [] },
    {id: 3, name: 'Oleg', age: 25, posts: [] },
];

class DataBase {
    constructor() {
        this.users = [...defaultUsers];
    }

    getUser(id) {
        return this.users.find(user => +user.id === id)
    }
    getAllUsers() {
        return this.users;
    }
    createUser(input) {
        const user = { id: Date.now(), ...input };
        this.users.push(user);
        return user;
    };
}

module.exports = new DataBase();
