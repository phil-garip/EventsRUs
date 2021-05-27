const sequelize = require('../config/connection');
const seedEvents = require('./eventSeeds');
const seedUsers = require('./userSeeds');
const seedLocations = require('./locationSeeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEvents();

  await seedUsers();

  await seedLocations();

  process.exit(0);
};

seedAll();