'use strict';
module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.DATE,
    address: DataTypes.TEXT,
    id_deliverymode: {
      type: DataTypes.INTEGER,
      references: {
        model: 'DeliveryModes',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    id_order: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    timestamps: false
  });
  Delivery.associate = function(models) {
    // associations can be defined here
  };
  return Delivery;
};