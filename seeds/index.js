const sequelize = require('../config/connection');
const seedDashboard = require('./dashboardData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDashboard();

  // await seedPaintings();

  process.exit(0);
};

seedAll();
