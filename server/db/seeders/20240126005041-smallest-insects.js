'use strict';
const { QueryInterface } = require('sequelize');
const { Insect } = require('../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Insect.bulkCreate('Insects', [
      {
        name: 'SmallBug',
        description: 'This bug is very small',
        territory: 'Hawaii',
        millimeters: 12,
        fact: 'this bug is pretty tiny.'
      }
    ], { validate: true })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {
      name: ['SmallBug']
    })
  }
};
