import conexao from "../../config/db.js";

const modelProduto = {
    cadastrar: async (fornecedorId, nome, descricao, unidadeMedida, precoUnitario, precoCusto, situacao) => {
        try {
            const [resultado] = await conexao.query(
                "INSERT INTO produto (fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao) VALUES (?,?,?,?,?,?,?)",
                [fornecedorId, nome, descricao, unidadeMedida, precoUnitario, precoCusto, situacao]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query(
                "SELECT id, fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao FROM produto"
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query(
                "SELECT id, fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao FROM produto WHERE id = ?",
                [id]
            );
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (fornecedorId, nome, descricao, unidadeMedida, precoUnitario, precoCusto, situacao, id) => {
        try {
            const [resultado] = await conexao.query(
                "UPDATE produto SET fornecedor_id = ?, nome = ?, descricao = ?, unidade_medida = ?, preco_unitario = ?, preco_custo = ?, situacao = ? WHERE id = ?",
                [fornecedorId, nome, descricao, unidadeMedida, precoUnitario, precoCusto, situacao, id]
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
