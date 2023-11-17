// Sample users
const { User } = require('../models');

const userData = [
  {
    "username": "Mike",
    "password": "REDACTED"
  },
  {
    "username": "Tritsch",
    "password": "REDACTED"
  },
  {
    "username": "Admin",
    "password": "REDACTED"
  }
];

const seedUser = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;