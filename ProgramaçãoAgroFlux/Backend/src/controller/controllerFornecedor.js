import modelFornecedor from '../model/modelFornecedor.js'

const controllerFornecedor = {
    cadastrar: async (req, res) => {
        const { funcionarioId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep } = req.body;

        try {
            const [cadastro] = await modelFornecedor.cadastrar(funcionarioId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep);

            if (cadastro.affectedRows > 0) {
                return res.status(201).json({ msg: "Cadastro com sucesso" });
            }
            else {
                return res.status(400).json({ msg: "Falha ao cadastrar" });
            }
        } catch (erro) {
            console.log(erro)
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listar: async (req, res) => {
        try {
            const consulta = await modelFornecedor.listar();

            return res.status(200).json(consulta);
        } catch (erro) {
            console.log(erro)
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listarPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const [consulta] = await modelFornecedor.listarPorId(id);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep } = req.body;

        try {
            const [atualizar] = await modelFornecedor.atualizar(nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id);

            if (atualizar.affectedRows > 0) {
                return res.status(200).json({ msg: "Atualizado com sucesso" });
            }
            else {
                return res.status(404).json({ msg: "Falha ao atualizar" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },
}

export default controllerFornecedor;
