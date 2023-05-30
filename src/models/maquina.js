const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Maquina = sequelize.define('Maquina', {
  id_maquina: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  sistema_operacional: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  fabricante: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  arquitetura: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  fk_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  codigo_patrimonio: {
    type: DataTypes.STRING(65),
    allowNull: false
  }
}, {
  tableName: 'Maquina',
  timestamps: false
});

module.exports = Maquina;
