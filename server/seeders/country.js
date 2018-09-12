'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [{
      name: 'Nigeria',
      region: 'West Africa',
      description: 'Nice',
      pictures: 'None',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Country', null, {});
  }
};