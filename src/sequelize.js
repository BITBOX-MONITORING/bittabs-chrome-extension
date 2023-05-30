const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bd-projeto-bitbox', 'admin-projeto-bitbox', '#Gfgrupo4', {
  host: 'srv-projeto-bitbox.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Define como verdadeiro se estiver usando conexão segura SSL/TLS
    },
  },
});

console.log('Iniciando aplicação....');

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log("Conexão bem sucedida!");
  } catch (error) {
    console.log("Conexão falhou :|", error);
  }
}

testConnection();

module.exports = sequelize;