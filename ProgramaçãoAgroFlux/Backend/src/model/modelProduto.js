import conexao from "../../config/db.js";

const modelProduto = {
    cadastrar: async (fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao, estoqueMinimo) => {
        
        try {
            const [resultadoP] = await conexao.query("INSERT INTO produto (fornecedor_id, funcionario_id, nome, descricao, unidade_medida, preco_venda, custo_unitario, categoria, situacao) VALUES (?,?,?,?,?,?,?,?,?)", [fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao]);
            if (resultadoP) {
                const idProduto = resultadoP.insertId;

                const [resultadoE] = await conexao.query("INSERT INTO estoque (produto_id, minimo) VALUES (?,?)", [idProduto, estoqueMinimo]);
                return resultadoE;
            }
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query("SELECT p.id, p.fornecedor_id, p.funcionario_id, p.nome, p.descricao, p.unidade_medida, p.preco_venda, p.custo_unitario, p.categoria, DATE_FORMAT(p.data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, p.situacao, e.quantidade FROM produto p JOIN estoque e ON p.id = e.produto_id");
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
