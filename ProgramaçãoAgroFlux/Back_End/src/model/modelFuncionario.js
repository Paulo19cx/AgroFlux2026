import conexao from '../../config/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const modelFuncionario = {
    cadastrar: async (nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao) => {

        const senhaHash = await bcrypt.hash(senha, 10);

        try {
            const resultado = await conexao.query("INSERT INTO funcionario (nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, situacao) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                [nome, cpf, cargo, email, senhaHash, dataNascimento, dataContratacao, salarioInicial, salarioAtual, situacao]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    },

    validarLogin: async (email, senha) => {
        try {
            const [consulta] = await modelFuncionario.buscarEmail(email);
        
            if (consulta.length > 0) {
                const combinacao = await bcrypt.compare(senha, consulta[0].senha);
                
                if (combinacao) {
                    const accessToken = jwt.sign(
                         { id_usuario: consulta[0].id, nome: consulta[0].nome, email: consulta[0].email },
                         process.env.JWT_SECRET,
                         { expiresIn: '25m' }
                    );

                    return {accessToken, id: consulta[0].id};
                } 
                else {
                    return null;
                }
            }
        }
        catch (erro) {
            throw erro;
        }
    },

    buscarEmail: async (email) => {
        try {
            const resultado = await conexao.query("SELECT empresa_id, id, nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, situacao FROM funcionario WHERE email = ?", [email]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const resultado = await conexao.query("SELECT empresa_id, id, nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, situacao FROM funcionario");
            return resultado;
        } 
        catch (erro) {
            throw erro;
        }
    },

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