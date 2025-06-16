const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

User.hasMany(Order);
Order.belongsTo(User);

module.exports = Order;
