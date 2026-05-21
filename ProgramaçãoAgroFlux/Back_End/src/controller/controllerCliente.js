import modelCliente from '../model/modelCliente.js'

const controllerCliente = {
    cadastrar: async (req, res) => {
        const { nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipo, principal, logradouro, numero, bairro, cidade, estado, cep, endereco_id, cliente_id } = req.body;

        try {
            const [cadastro] = await modelCliente.cadastrar(nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipo, principal, logradouro, numero, bairro, cidade, estado, cep);

            if (cadastro.affectedRows > 0) {
                return res.status(201).json({ msg: "Cadastro com sucesso" });
            }
            else {
                return res.status(400).json({ msg: "Falha ao cadastrar" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listar: async (req, res) => {
        try {
            const consulta = await modelCliente.listar();

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listarPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const [consulta] = await modelCliente.listarPorId(id);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep } = req.body;

        try {
            const [atualizar] = await modelCliente.atualizar(nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id);
            console.log(atualizar)

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

    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            const [deletar] = await modelCliente.deletar(id);

            if (deletar.affectedRows > 0) {
                return res.status(200).json({ msg: "Deletado com sucesso" });
            }
            else {
                return res.status(404).json({ msg: "Falha ao deletar" });
            }
        } catch (erro) {
            console.log(erro)
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    }
}

export default controllerCliente;