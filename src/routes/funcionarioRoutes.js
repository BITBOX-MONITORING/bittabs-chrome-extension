const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Rota para consultar os funcionários
router.get('/:code', funcionarioController.getFuncionarios);

module.exports = router;
