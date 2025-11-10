const express = require('express');

const cors = require('cors');

const app = express();

require("./Config/db");

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("Servidor e DataBase rodando com sucesso!");
});

module.exports = app;
