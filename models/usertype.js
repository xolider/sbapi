'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
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
  UserType.associate = function(models) {
    UserType.hasMany(models.Customer, {foreignKey: 'id_usertype'})
  };
  return UserType;
};