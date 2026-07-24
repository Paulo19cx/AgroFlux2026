import modelFuncionario from '../model/modelFuncionario.js'

const controllerFuncionario = {
    cadastrar: async (req, res) => {
        const { nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep } = req.body;
        
        try {
            const [validarEmail] = await modelFuncionario.buscarEmail(email);

            if (validarEmail.length > 0) {
                return res.status(409).json({ msg: "Email já cadastrado" });
            }
            else {
                const [cadastro] = await modelFuncionario.cadastrar(nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep);

                if (cadastro.affectedRows > 0) {
                    return res.status(201).json({ msg: "Cadastro com sucesso" });
                }
                else {
                    return res.status(400).json({ msg: "Falha ao cadastrar" });
                }
            }
        }
        catch (erro) {
            console.log(erro);
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    login: async (req, res) => {
        const { email, senha } = req.body;
        console.log(req.body)
        try {
            const validar = await modelFuncionario.validarLogin(email, senha);
            console.log(validar)

            if (!validar) {
                return res.status(401).json({ msg: "Falha ao realizar o login" });
            }
            else {
                return res.status(200).json(validar);
            }
        }
        catch (erro) {
            console.log(erro)
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listar: async (req, res) => {
        try {
            const consulta = await modelFuncionario.listar();

            return res.status(200).json(consulta);
        } 
        catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    listarPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const [consulta] = await modelFuncionario.listarPorId(id);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const { nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep } = req.body;
        
        try {
            const atualizar = await modelFuncionario.atualizar(nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id);
            
            return res.status(200).json({ msg: "Atualizado com sucesso" });
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            const deletar = await modelFuncionario.deletar(id);

            if (deletar.affectedRows > 0) {
                return res.status(200).json({ msg: "Deletado com sucesso" });
            }
            else {
                return res.status(404).json({ msg: "Falha ao deletar" });
            }
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },

    pesquisar: async (req, res) => {
        const { nome } = req.query;

        try {
            const consulta = await modelFuncionario.pesquisar(nome);

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    }
}

export default controllerFuncionario;
