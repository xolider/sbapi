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
    OrderStatus.hasMany(models.Order, {foreignKey: 'id_orderstatus'})
  };
  return OrderStatus;
};