const users = require("../users")

const res = users.filter(user => user.address.zipcode.startsWith('5'));
