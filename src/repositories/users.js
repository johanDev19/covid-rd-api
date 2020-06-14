const Users = require("./../models/Users");

module.exports = ({ name, lastName, email, password }) => {
  return new Users({
    name: name,
    lastName: lastName,
    email: email,
    password: password,
  });
};
