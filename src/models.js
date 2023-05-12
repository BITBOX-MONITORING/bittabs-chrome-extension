const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Tab = sequelize.define('Tab', {
  titulo: DataTypes.STRING,
  url: DataTypes.STRING,
  ultimaHoraAberta: DataTypes.DATE
});

console.log(Tab);

module.exports = Tab;
