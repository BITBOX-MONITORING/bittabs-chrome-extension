const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const Tabs = sequelize.define('Tabs', {
    titulo: DataTypes.STRING,
    url: DataTypes.STRING,
    ultimaHoraAberta: DataTypes.DATE
});

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Define uma rota para receber a lista de abas
app.post('/tabs', async (req, res) => {
    console.log("\nTab\n: ", req.body);

    try {
        const tabs = req.body.tabs;

        const insertedTabs = await Promise.all(tabs.map(tab => {
            return Tabs.create({
                titulo: tab.title,
                url: tab.url,
                ultimaHoraAberta: tab.lastActiveTime
            });
        }));
        
        res.json(insertedTabs);

    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao criar as abas');
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
