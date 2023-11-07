const { User } = require('../models');

const userData = [
  {
    "username": "Mike",
    "password": "password1"
  },
  {
    "username": "Tritsch",
    "password": "password2"
  },
  {
    "username": "Admin",
    "password": "password3"
  }
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;