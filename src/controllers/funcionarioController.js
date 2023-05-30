const Funcionario = require('../models/funcionario');

// Função para consultar os funcionários
exports.getFuncionarios = async (req, res) => {
  const code = req.params.code;
  try {
    const funcionarios = await Funcionario.findAll({
      where: {
        id_funcionario: code,
      },
    });
    res.send(funcionarios);
  } catch (error) {
    console.error('Ocorreu um erro ao consultar os funcionários:', error);
    res.status(500).send('Ocorreu um erro ao consultar os funcionários');
  }
};
