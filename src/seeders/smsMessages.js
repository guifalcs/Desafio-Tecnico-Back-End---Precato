'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('smsMessages', [
      {
        phone: '+1234567890',
        message: 'Hello, this is a test message!',
        status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: '+0987654321',
        message: 'Your order has been shipped.',
        status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: '+1122334455',
        message: 'Please verify your account.',
        status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('smsMessages', null, {});
  }
};
