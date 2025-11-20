const connection = require ('../Config/db');
const emprestimosModel = {
    buscarTodos: (callback) => {
        const sql = 'SELECT * FROM emprestimos';
        connection.query(sql, callback);
    },

    buscarPorId: (id, callback) => {
        const sql = 'SELECT * FROM emprestimos WHERE id = ?';
        connection.query(sql, [id], callback);
    },

    criarEmprestimo: (dados, callback) => {
            const sql = "INSERT INTO emprestimos (id_livro, nome_pessoa, data_emprestimo) VALUES (?, ?, ?)";
            connection.query(sql, [dados.id_livro, dados.nome_pessoa, dados.data_emprestimo], callback);
},

    atualizarEmprestimo: (id, dados, callback) => {
        const sql = "UPDATE emprestimos SET id_livro = ?, nome_pessoa = ?, data_emprestimo = ? WHERE id = ?"
        connection.query(sql, [dados.id_livro, dados.nome_pessoa, dados.data_emprestimo, id], callback)
    },

    deletarEmprestimo: (id, callback) => {
        const sql ="DELETE FROM emprestimos WHERE id = ?";
        connection.query(sql, [id], callback);
    }
};



module.exports = emprestimosModel; 