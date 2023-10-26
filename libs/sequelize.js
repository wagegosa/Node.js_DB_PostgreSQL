const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbname}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

module.exports = sequelize;