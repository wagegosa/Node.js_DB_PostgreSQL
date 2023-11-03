const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbname}`;
module.exports = {
    development: {
      url: URI,
      dialect: 'postgres',
    },
    production: {
      url: URI,
      dialect: 'postgres',
    }
  };