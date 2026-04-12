import modelFuncionario from '../model/modelFuncionario.js'

const controllerFuncionario = {
    cadastrar: async (req, res) => {
        const { empresa_id, nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao } = req.body;

        try {
            const [validarEmail] = await modelFuncionario.buscarEmail(email);

            if (validarEmail.length > 0) {
                return res.status(409).json({ msg: "Email já cadastrado" });
            }
            else {
                const [cadastro] = await modelFuncionario.cadastrar(empresa_id, nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao);

                if (cadastro.affectedRows > 0) {
                    return res.status(201).json({ msg: "Cadastro com sucesso" });
                }
                else {
                    return res.status(400).json({ msg: "Falha ao cadastrar" });
                }
            }
        }
        catch (erro) {
            console.error(erro);
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    validarLogin: async (req, res) => {
        const { email, senha } = req.body;

        try {
            const [validar] = await modelFuncionario.validarLogin(email, senha);

            if (!validar) {
                return res.status(401).json({ msg: "Falha ao realizar o login" });
            }
            else {
                return res.status(200).json(validar);
            }
        }
        catch (erro) {

        }
    },

    deletar: async (req, res) => {
        try {
            const { id } = req.params;

            const [excluir] = await modelFuncionario.deletar(id);

            if (excluir.affectedRows > 0) {
                return res.status(200).json({ msg: "Deletado com sucesso" });
            }
            else {
                return res.status(404).json({ msg: "Falha ao deletar" });
            }
        }
        catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    }
}

export default controllerFuncionario;
