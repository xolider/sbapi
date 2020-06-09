'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: DataTypes.DATE,
    total: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    id_customer: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    id_orderstatus: {
      type: DataTypes.INTEGER,
      references: {
        model: 'OrderStatuses',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    timestamps: false
  });
  Order.associate = function(models) {
    Order.belongsTo(models.Product, {foreignKey: 'id_product'})
    Order.belongsTo(models.Customer, {foreignKey: 'id_customer'})
    Order.belongsTo(models.OrderStatus, {foreignKey: 'id_orderstatus'})
  };
  return Order;
};