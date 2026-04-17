import conexao from '../../config/db.js';
import bcrypt from 'bcrypt';

const modelFuncionario = {
    cadastrar: async (empresa_id, nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao) => {

        const senhaHash = await bcrypt.hash(senha, 10);

        try {
            const resultado = await conexao.query("INSERT INTO funcionario (empresa_id, nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, situacao) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                [empresa_id, nome, cpf, cargo, email, senhaHash, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    },

    login: async (email, senha) => {
        try {
            const [consulta] = await modelFuncionario.buscarEmail(email);

            if (consulta.length > 0) {
                const combinacao = await bcrypt.compare(senha, consulta[0].senha);

                if (combinacao) {
                    return consulta;
                } 
                else {
                    return null;
                }
            }
            else{
                return null;
            }
        }
        catch (erro) {
            throw erro;
        }
    },

    buscarEmail: async (email) => {
        try {
            const resultado = await conexao.query("SELECT empresa_id, nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, situacao FROM funcionario WHERE email = ?", [email]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    }
    ,
    deletar: async (id) => {
        try {
            const resultado = await conexao.query("DELETE FROM funcionario WHERE id = ?", [id]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    }
}

export default modelFuncionario;