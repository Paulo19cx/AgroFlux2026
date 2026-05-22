import conexao from "../../config/db.js";

const modelProduto = {
    cadastrar: async (fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao) => {
        try {
            const [resultado] = await conexao.query(
                "INSERT INTO produto (fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao) VALUES (?,?,?,?,?,?,?)",
                [fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query(
                "SELECT id, fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro FROM produto"
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query(
                "SELECT id, fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro FROM produto WHERE id = ?",
                [id]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao, id) => {
        try {
            const [resultado] = await conexao.query(
                "UPDATE produto SET fornecedor_id = ?, nome = ?, descricao = ?, unidade_medida = ?, preco_unitario = ?, preco_custo = ?, situacao = ? WHERE id = ?",
                [fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao, id]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    deletar: async (id) => {
        try {
            const [resultado] = await conexao.query(
                "DELETE FROM produto WHERE id = ?",
                [id]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    }
};

export default modelProduto;
