'use strict';

const { userSchema, USER_TABLE } = require('../models/user.model')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, userSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(USER_TABLE);
  }
};
