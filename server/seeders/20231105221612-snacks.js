'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('snacks',[
      {
        name: 'lollipops',
        vendor: 'Miller',
        img: 'https://placekitten.com/275/275',
        price: 1.50,
        desc: "Comes with three different flavors"
      },
      {
        name: 'Chocolate bar',
        vendor: 'Dug',
        img: "https://placekitten.com/275/275",
        price: 2.50,
        desc:"Milk chocolate in a bar"
      },
      {
        name: 'Cookies',
        vendor: "Sarah Farms",
        img: "https://placekitten.com/275/275",
        price:5,
        desc:"Three pack of cookies"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('snacks',null,[])
  }
};
