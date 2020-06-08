'use strict';
module.exports = (sequelize, DataTypes) => {
  const DeliveryMode = sequelize.define('DeliveryMode', {
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
  DeliveryMode.associate = function(models) {
    // associations can be defined here
  };
  return DeliveryMode;
};