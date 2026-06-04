const users = require("../users")

const res = users.every(user => user.address.city === "South Christy");