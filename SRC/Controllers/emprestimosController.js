const emprestimosModel = require("../Models/emprestimosModel");

const emprestimosController = {
    buscarTodos: (req, res) => {
        emprestimosModel.buscarTodos((err, result) => {
            if (err) {
                console.error("Erro ao buscar emprestimos:", err);
                return res.status(500).json({ erro: "Erro ao buscar emprestimos" });
            }

            res.json(result);
        });
    },

    buscarPorId: (req, res) => {
        const { id } = req.params;

     emprestimosModel.buscarPorId(id, (err, result) => {
            if (err) {
                console.error("Erro ao buscar emprestimo pelo ID:", err);
                return res.status(500).json({ erro: "Erro ao buscar emprestimo pelo ID" });
            }

            if (result.length === 0) {
                return res.status(404).json({ erro: "emprestimo não encontrado!" });
            }

            res.json(result[0]);
        });
    },

    adicionarEmprestimo: (req, res) => {
        const dados = req.body;

        emprestimosModel.adicionarEmprestimo(dados, (err, result) => {
            if (err) {
                console.error("Erro ao Adicionar um novo emprestimo:", err);
                return res.status(500).json({erro: "Erro ao Adicionar um novo emprestimo: "});
            }

            res.status(201).json({mensagem: "emprestimo Adicionado com sucesso!", id: result.insertId });
        });
    },

     atualizarEmprestimo: (req, res) => {
        const { id } = req.params;
        const dados = req.body;

        emprestimosModel.atualizarEmprestimo(id, dados, (err, result) => {
            if (err) {
                console.error("Erro ao atualizar emprestimo:", err);
                return res.status(500).json({ erro: "Erro ao atualizar emprestimo" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "emprestimo não encontrado!" });
            }

            res.json({ mensagem: "emprestimo atualizado com sucesso!" });
        });
    },


     deletarEmprestimo: (req, res) => {
        const { id } = req.params;

        emprestimosModel.deletarEmprestimo(id, (err, result) => {
            if (err) {
                console.error("Erro ao deletar emprestimo:", err);
                return res.status(500).json({ erro: "Erro ao deletar emprestimo" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "emprestimo não encontrado!" });
            }

            res.json({ mensagem: "emprestimo deletado com sucesso!" });
        });
    }
};

module.exports = emprestimosController; 