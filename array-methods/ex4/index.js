const users = require("../users")

const names = users.map(user => user.name).filter(name => name.startsWith('C'));

console.log(names);