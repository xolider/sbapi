'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    icon: DataTypes.STRING,
    id_usertype: {
      type: DataTypes.INTEGER,
      references: {
        model: 'UserType',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    timestamps: false
  });
  Customer.associate = function(models) {
    Customer.belongsTo(models.UserType, {foreignKey: 'id_usertype'})
    Customer.hasMany(models.Order, {foreignKey: 'id_customer'})
  };
  return Customer;
};