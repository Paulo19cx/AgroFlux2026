import conexao from "../../config/db.js";

const modelProduto = {
    cadastrar: async (fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao) => {
        
        try {
            const [resultado] = await conexao.query("INSERT INTO produto (fornecedor_id, funcionario_id, nome, descricao, unidade_medida, preco_venda, custo_unitario, categoria, situacao) VALUES (?,?,?,?,?,?,?,?,?)", [fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query("SELECT id, fornecedor_id, funcionario_id, nome, descricao, unidade_medida, preco_venda, custo_unitario, categoria, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, situacao FROM produto");
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query("SELECT id, fornecedor_id, funcionario_id, nome, descricao, unidade_medida, preco_venda, custo_unitario, categoria, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, situacao FROM produto WHERE id = ?",[id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    persquisar: async (nome) => {
        try {
            nome = nome.toLowerCase().trim();

            const [resultado] = await conexao.query("SELECT id, nome, descricao, unidade_medida, preco_venda, custo_unitario, categoria, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, situacao FROM produto WHERE nome LIKE ? ORDER BY nome ASC", [`%${nome}%`]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao, id) => {
    
        try {
            const [resultado] = await conexao.query("UPDATE produto SET nome = ?, descricao = ?, unidade_medida = ?, preco_venda = ?, custo_unitario = ?, categoria = ?, situacao = ? WHERE id = ?", [nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao, id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    deletar: async (id) => {
        try {
            const [resultado] = await conexao.query("DELETE FROM produto WHERE id = ?", [id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    }
};

export default modelProduto;
