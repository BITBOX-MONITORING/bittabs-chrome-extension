const express = require('express');
const router = express.Router();
const maquinaController = require('../controllers/maquinaController');

// Rota para consultar os funcionários
router.get('/:id', maquinaController.getMaquinas);

module.exports = router;
