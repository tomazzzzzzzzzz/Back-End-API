const livrosModel = require("../Models/livrosModel");

const livrosController = {
    buscarTodos: (req, res) => {
        livrosModel.buscarTodos((err, result) => {
            if (err) {
                console.error("Erro ao buscar livros:", err);
                return res.status(500).json({ erro: "Erro ao buscar livros" });
            }

            res.json(result);
        });
    },

    buscarPorId: (req, res) => {
        const { id } = req.params;

        livrosModel.buscarPorId(id, (err, result) => {
            if (err) {
                console.error("Erro ao buscar livro pelo ID:", err);
                return res.status(500).json({ erro: "Erro ao buscar livro pelo ID" });
            }

            if (result.length === 0) {
                return res.status(404).json({ erro: "livro não encontrado!" });
            }

            res.json(result[0]);
        });
    },

    adicionarLivro: (req, res) => {
        const dados = req.body;

        livrosModel.criarLivro(dados, (err, result) => {
            if (err) {
                console.error("Erro ao Adicionar um novo livro:", err);
                return res.status(500).json({erro: "Erro ao Adicionar um novo livro: "});
            }

            res.status(201).json({mensagem: "livro Adicionado com sucesso!", id: result.insertId });
        });
    },

     atualizarLivro: (req, res) => {
        const { id } = req.params;
        const dados = req.body;

        livrosModel.atualizarLivro(id, dados, (err, result) => {
            if (err) {
                console.error("Erro ao atualizar livro:", err);
                return res.status(500).json({ erro: "Erro ao atualizar livro" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "livro não encontrado!" });
            }

            res.json({ mensagem: "livro atualizado com sucesso!" });
        });
    },


     deletarLivro: (req, res) => {
        const { id } = req.params;

        livrosModel.deletarLivro(id, (err, result) => {
            if (err) {
                console.error("Erro ao deletar livro:", err);
                return res.status(500).json({ erro: "Erro ao deletar livro" });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "livro não encontrado!" });
            }

            res.json({ mensagem: "livro deletado com sucesso!" });
        });
    }
};

module.exports = livrosController; 