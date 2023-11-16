'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('snacks', 'cat',{
      type: Sequelize.DataTypes.ENUM,
      values: [
      'candy',
      'chocolate',
      'baked',
    ],
    defaultValue: 'candy'
  })}
  ,

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('snacks', 'cat')
  }
};
