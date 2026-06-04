const users = require("../users")

const res = users.find(user => user.address.suite === "Apt. 950");
console.log(res.company.name);