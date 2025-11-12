const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '20406080',
    database: 'biblioteca_db'
});

connection.connect(function(err) {
    if (err) {
        console.log("Erro ao se conectar ao Banco!");
    } else {
        console.log("Conectado ao Banco com Sucesso!");
    }
});

module.exports = connection;