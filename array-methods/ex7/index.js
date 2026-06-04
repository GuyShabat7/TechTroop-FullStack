const users = require("../users")

function printUserInfo(user) {
  console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`);
}

users.forEach(printUserInfo);

