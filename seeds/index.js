'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'First Post',
        body: 'This is the body of the first post.',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Second Post',
        body: 'This is the body of the second post.',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};