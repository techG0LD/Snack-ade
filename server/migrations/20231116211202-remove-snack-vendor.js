'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('snacks', 'vendor')
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('snacks', 'vendor')
  }
};
