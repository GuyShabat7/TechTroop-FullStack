const users = require("../users")
const res = users.map(user => ({email: user.email, companyName: user.company.name}));
