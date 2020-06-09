'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  Product.associate = function(models) {
    Product.hasMany(models.Order, {foreignKey: 'id_product'})
  };
  return Product;
};