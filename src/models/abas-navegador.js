// tabModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const AbasNavegador = sequelize.define(
  'AbasNavegador',
  {
    id_abas_navegador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_janela: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    ultima_vez_aberto: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    codigo_patrimonio: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    tableName: 'AbasNavegador',
    timestamps: false,
  }
);

module.exports = AbasNavegador;
