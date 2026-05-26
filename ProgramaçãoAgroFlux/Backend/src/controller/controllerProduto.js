import modelProduto from '../model/modelProduto.js';

const controllerProduto = {
    cadastrar: async (req, res) => {
        const { fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao } = req.body;
        
        try {
            const cadastro = await modelProduto.cadastrar(fornecedorId, funcionarioId, nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao);

            if (cadastro.affectedRows > 0) {
                return res.status(201).json({ msg: "Produto cadastrado com sucesso"});
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

    persquisar: async (req, res) => {
        try {
            const { nome } = req.query;

            if (!nome) {
                return res.status(400).json({ msg: "Informe um nome" });
            }
            
            const consulta = await modelProduto.persquisar(nome);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao } = req.body;

        try {
            const atualizar = await modelProduto.atualizar(nome, descricao, unidadeMedida, precoVenda, custoUnitario, categoria, situacao, id);

            if (atualizar.affectedRows > 0) {
                return res.status(200).json({ msg: "Produto atualizado com sucesso" });
            } else {
                return res.status(404).json({ msg: "Produto não encontrado" });
            }
        } catch (erro) {
            console.error(erro);
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
