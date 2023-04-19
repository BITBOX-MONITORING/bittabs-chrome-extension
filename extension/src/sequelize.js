const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('TestSequelize', 'root', 'workr00t', {
  host: 'localhost',
  dialect: 'mysql'
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

sequelize.sync().then(() => {
  console.log('Tabela criada com sucesso.');
}).catch((error) => {
  console.log('Erro ao criar tabela:', error);
});

module.exports = sequelize;