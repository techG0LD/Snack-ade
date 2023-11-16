'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('snacks', 'vendor_id', {
        type: Sequelize.DataTypes.INTEGER
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('snacks', 'vendor_id')
  }
};

