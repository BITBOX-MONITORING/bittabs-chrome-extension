const express = require('express');
const router = express.Router();
const abaNavegadorController = require('../controllers/abaNavegadorController');

router.post('/', abaNavegadorController.createAbasNavegador);

module.exports = router;
