import modelCliente from '../model/modelCliente.js'

const controllerCliente = {
    cadastrar: async (req, res) => {
        const {empresa_id, nome_razao_social, nome_fantasia, cnpj, email, logradouro, numero, bairro, cidade, estado, cep, endereco_id, cliente_id} = req.body;

        try {
            const [cadastroC] = await modelCliente.cadastrar(empresa_id, nome_razao_social, nome_fantasia, cnpj, email);
            const [cadastroE] = await modelCliente.cadastrar(logradouro, numero, bairro, cidade, estado, cep);
            const [cadastroClienteEndereco] = await modelCliente.cadastrar(endereco_id, cliente_id);

            if (cadastroC.affectedRows && cadastroE.affectedRows && cadastroClienteEndereco.affectedRows > 0) {
                    return res.status(201).json({ msg: "Cadastro com sucesso" });
                }
                else {
                    return res.status(400).json({ msg: "Falha ao cadastrar" });
                }
        } 
        catch (erro) {
            console.log(erro)
            return res.status(500).json({msg: "Erro no servidor"});
        }
    }
}

export default controllerCliente;