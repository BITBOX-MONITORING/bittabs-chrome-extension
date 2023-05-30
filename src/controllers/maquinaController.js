const Maquina = require('../models/maquina');

// Função para consultar os funcionários
exports.getMaquinas = async (req, res) => {
  const code = req.params.code;
  try {
    const maquinas = await Maquina.findAll({
      where: {
        id_maquina: code,
      },
    });
    res.send(maquinas);
  } catch (error) {
    console.error('Ocorreu um erro ao consultar os funcionários:', error);
    res.status(500).send('Ocorreu um erro ao consultar os funcionários');
  }
};
