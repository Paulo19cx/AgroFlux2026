import modelCliente from '../model/modelCliente.js'

const controllerCliente = {
    cadastrar: async (req, res) => {
        const {empresaId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao} = req.body;

        try {
            const [cadastro] = await modelCliente.cadastrar(empresaId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao);

            if (cadastro.affectedRows > 0) {
                    return res.status(201).json({ msg: "Cadastro com sucesso" });
                }
                else {
                    return res.status(400).json({ msg: "Falha ao cadastrar" });
                }
        } 
        catch (erro) {
            return res.status(500).json({msg: "Erro no servidor"});
        }
    }
}

export default controllerCliente;