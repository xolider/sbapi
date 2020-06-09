'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.TEXT
      },
      mail: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      id_usertype: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UserTypes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};