const sequelize = require('../sequelize'); // Importe o objeto sequelize que representa a conexão com o banco de dados

exports.createAbasNavegador = async (req, res) => {
  console.log('\nTab\n: ', req.body);

  try {
    const tabs = req.body.tabs;

    const insertedTabs = await sequelize.transaction(async (transaction) => {
      const values = tabs.map((tab) => {
        const ultimaVezAberto = new Date(tab.ultima_vez_aberto).toISOString(); // Converte para formato DATETIME
        return `(${tab.id_janela}, '${tab.titulo}', '${tab.url}', '${ultimaVezAberto}', '${tab.codigo_patrimonio}')`;
      });

      const sql = `
        INSERT INTO AbasNavegador (id_janela, titulo, url, ultima_vez_aberto, codigo_patrimonio)
        VALUES ${values.join(', ')}
      `;

      const result = await sequelize.query(sql, { transaction, raw: true });

      return result[0];
    });

    res.json(insertedTabs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao criar as abas');
  }
};
