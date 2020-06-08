'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define('OrderStatus', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING
  }, {
    timestamps: false
  });
  OrderStatus.associate = function(models) {
    // associations can be defined here
  };
  return OrderStatus;
};