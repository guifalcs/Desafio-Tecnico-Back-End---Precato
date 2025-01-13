'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('smsMessages', [
      {
        phone: '+1234567890',
        message: 'Olá, isso é uma mensagem de teste!',
        status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: '+0987654321',
        message: 'Olá, isso é uma segunda mensagem de teste!',
        status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        phone: '+1122334455',
        message: 'Olá, isso é uma terceira mensagem de teste!',
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
