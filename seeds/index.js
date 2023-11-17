// Master seed connections
const sequelize = require('../config/config.js');
const seedPost = require('./postData.js');
const seedUser = require('./userData.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });


  await seedUser();
  
  await seedPost();


  process.exit(0);
};

seedAll();