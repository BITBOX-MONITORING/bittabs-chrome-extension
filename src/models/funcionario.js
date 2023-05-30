const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Funcionario = sequelize.define('Funcionario', {
  id_funcionario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  nome: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  senha: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  fk_noc: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_empresa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING(65),
    allowNull: true
  }
}, {
  tableName: 'Funcionario',
  timestamps: false
});

module.exports = Funcionario;
