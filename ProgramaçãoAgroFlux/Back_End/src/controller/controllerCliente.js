import modelCliente from '../model/modelCliente.js'

const controllerCliente = {
    cadastrar: async (req, res) => {
        const {nome_razao_social, nome_fantasia, cnpj, email, telefone, tipo, principal, logradouro, numero, bairro, cidade, estado, cep, endereco_id, cliente_id} = req.body;

        console.log(req.body)

        try {
            const [cadastro] = await modelCliente.cadastrar(nome_razao_social, nome_fantasia, cnpj, email, telefone, tipo, principal, logradouro, numero, bairro, cidade, estado, cep);

            if (cadastro.affectedRows > 0) {
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