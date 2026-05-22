import modelProduto from '../model/modelProduto.js';

const controllerProduto = {
    cadastrar: async (req, res) => {
        const { fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao } = req.body;

        try {
            const cadastro = await modelProduto.cadastrar(fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao);

            if (cadastro.affectedRows > 0) {
                return res.status(201).json({ msg: "Produto cadastrado com sucesso", id: cadastro.insertId });
            } else {
                return res.status(400).json({ msg: "Falha ao cadastrar produto" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listar: async (req, res) => {
        try {
            const consulta = await modelProduto.listar();

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listarPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const [consulta] = await modelProduto.listarPorId(id);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao } = req.body;

        try {
            const atualizar = await modelProduto.atualizar(fornecedor_id, nome, descricao, unidade_medida, preco_unitario, preco_custo, situacao, id);

            if (atualizar.affectedRows > 0) {
                return res.status(200).json({ msg: "Produto atualizado com sucesso" });
            } else {
                return res.status(404).json({ msg: "Produto não encontrado" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            const deletar = await modelProduto.deletar(id);

            if (deletar.affectedRows > 0) {
                return res.status(200).json({ msg: "Produto deletado com sucesso" });
            } else {
                return res.status(404).json({ msg: "Produto não encontrado" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    }
};

export default controllerProduto;
