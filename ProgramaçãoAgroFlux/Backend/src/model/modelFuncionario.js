import conexao from '../../config/db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const modelFuncionario = {
    cadastrar: async (nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep) => {
        
        const senhaHash = await bcrypt.hash(senha, 10);

        try {
            const [resultadoF] = await conexao.query("INSERT INTO funcionario (nome, cpf, cargo, email, senha, data_nascimento, data_contratacao, salario_inicial, salario_atual, regra, situacao) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [nome, cpf, cargo, email, senhaHash, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao]);
            
            if (resultadoF) {
                const idFuncionario = resultadoF.insertId;

                const resultadoT = await conexao.query("INSERT INTO telefone (funcionario_id, numero_telefone, tipo, principal) VALUES (?,?,?,?)", [idFuncionario, numeroTelefone, tipoTelefone, principal]);

                if (resultadoT) {
                    const [resultadoE] = await conexao.query("INSERT INTO endereco (logradouro, numero, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?)", [logradouro, numero, bairro, cidade, estado, cep]);

                    if (resultadoE) {
                        const idEndereco = resultadoE.insertId;

                        const resultFuncionarioEndereco = await conexao.query("INSERT INTO funcionario_endereco (endereco_id, funcionario_id) VALUES (?,?)", [idEndereco, idFuncionario]);

                        return resultFuncionarioEndereco;
                    }
                }
            }
        }
        catch (erro) {
            throw erro;
        }
    },


    validarLogin: async (email, senha) => {
        try {
            const [consulta] = await modelFuncionario.buscarEmail(email);
            console.log(consulta)
        
            if (consulta.length > 0) {
                const combinacao = await bcrypt.compare(senha, consulta[0].senha);
                console.log(combinacao)
                if (combinacao) {
                    const accessToken = jwt.sign(
                         { id_usuario: consulta[0].id, nome: consulta[0].nome, email: consulta[0].email },
                         process.env.JWT_SECRET,
                         { expiresIn: '25m' }
                    );

                    return {accessToken, id: consulta[0].id, regra: consulta[0].regra, nome: consulta[0].nome};
                    
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
            const resultado = await conexao.query("SELECT empresa_id, id, nome, cpf, cargo, email, senha, regra, DATE_FORMAT(data_nascimento, '%d/%m/%Y') AS data_nascimento, DATE_FORMAT(data_contratacao, '%d/%m/%Y') AS data_contratacao, salario_inicial, salario_atual, situacao FROM funcionario WHERE email = ?", [email]);
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const resultado = await conexao.query("SELECT f.id, f.empresa_id, f.nome, f.cpf, f.cargo, f.email, DATE_FORMAT(f.data_nascimento, '%d/%m/%Y') AS data_nascimento, DATE_FORMAT(f.data_contratacao, '%d/%m/%Y %H:%i:%s') AS data_contratacao, f.salario_inicial, f.salario_atual, f.regra, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM funcionario f JOIN telefone t ON f.id = t.funcionario_id JOIN funcionario_endereco fe ON f.id = fe.funcionario_id JOIN endereco e ON e.id = fe.endereco_id");
            return resultado;
        } 
        catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query("SELECT f.id, f.empresa_id, f.nome, f.cpf, f.cargo, f.email, DATE_FORMAT(f.data_nascimento, '%d/%m/%Y') AS data_nascimento, DATE_FORMAT(f.data_contratacao, '%d/%m/%Y %H:%i:%s') AS data_contratacao, f.salario_inicial, f.salario_atual, f.regra, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM funcionario f JOIN telefone t ON f.id = t.funcionario_id JOIN funcionario_endereco fe ON f.id = fe.funcionario_id JOIN endereco e ON e.id = fe.endereco_id WHERE f.id = ?", [id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (nome, cpf, cargo, email, senha, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id) => {
        
        const senhaHash = await bcrypt.hash(senha, 10);
        
        try {
            const [resultadoF] = await conexao.query("UPDATE funcionario SET nome = ?, cpf = ?, cargo = ?, email = ?, senha = ?, data_nascimento = ?, data_contratacao = ?, salario_inicial = ?, salario_atual = ?, regra = ?, situacao = ? WHERE id = ?", [nome, cpf, cargo, email, senhaHash, dataNascimento, dataContratacao, salarioInicial, salarioAtual, regra, situacao, id]);
            if (resultadoF.affectedRows > 0) {
                const [resultadoT] = await conexao.query("UPDATE telefone SET numero_telefone = ?, tipo = ?, principal = ? WHERE funcionario_id = ?", [numeroTelefone, tipoTelefone, principal, id]);

                if (resultadoT.affectedRows > 0) {
                    const [resultadoE] = await conexao.query("UPDATE endereco e JOIN funcionario_endereco fe ON e.id = fe.endereco_id SET e.logradouro = ?, e.numero = ?, e.bairro = ?, e.cidade = ?, e.estado = ?, e.cep = ? WHERE fe.funcionario_id = ?", [logradouro, numero, bairro, cidade, estado, cep, id]);
                    return resultadoE;
                }
            }

        } catch (erro) {
            throw erro;
        }
    },

    deletar: async (id) => {
        try {
            const [resultadoE] = await conexao.query("DELETE e FROM endereco e JOIN funcionario_endereco fe ON fe.endereco_id = e.id WHERE fe.funcionario_id = ?", [id]);

            if (resultadoE.affectedRows > 0) {
                const [resultadoF] = await conexao.query("DELETE FROM funcionario WHERE id = ?", [id]);
                return resultadoF;
            }
        } catch (erro) {
            throw erro;
        }
    },

    pesquisar: async (nome) => {
        try {
            const [resultado] = await conexao.query("SELECT f.id, f.empresa_id, f.nome, f.cpf, f.cargo, f.email, DATE_FORMAT(f.data_nascimento, '%d/%m/%Y') AS data_nascimento, DATE_FORMAT(f.data_contratacao, '%d/%m/%Y %H:%i:%s') AS data_contratacao, f.salario_inicial, f.salario_atual, f.regra, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM funcionario f JOIN telefone t ON f.id = t.funcionario_id JOIN funcionario_endereco fe ON f.id = fe.funcionario_id JOIN endereco e ON e.id = fe.endereco_id WHERE f.nome LIKE ?", [`%${nome}%`]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    }
}

export default modelFuncionario;
