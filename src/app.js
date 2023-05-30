const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const funcionarioRoutes = require('./routes/funcionarioRoutes');
const maquinaRoutes = require('./routes/maquinaRoutes');
const abaNavegadorRoutes = require('./routes/abaNavegadorRoutes');

app.use(cors());
app.use(bodyParser.json());


app.use('/funcionarios', funcionarioRoutes);
app.use('/maquinas', maquinaRoutes);
app.use('/abaNavegadorRoutes', abaNavegadorRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
