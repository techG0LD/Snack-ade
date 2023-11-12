'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstName:'a',
        lastName:'j',
        email:"a@gmail.com",
        pass:"123"
      },
      {
        firstName:'o',
        lastName:'j',
        email:"o@gmail.com",
        pass:"123"
      },
      {
        firstName:'m',
        lastName:'j',
        email:"m@gmail.com",
        pass:"123"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users',null,[])
  }
};
