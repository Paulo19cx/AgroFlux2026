import conexao from '../../config/db.js';

const modelFornecedor = {
    cadastrar: async (funcionarioId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep) => {
        try {
            const [resultadoF] = await conexao.query("INSERT INTO fornecedor (funcionario_id, nome_razao_social, nome_fantasia, cnpj, email, situacao) VALUES (?,?,?,?,?,?)", [funcionarioId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao]);

            if (resultadoF) {
                const idFornecedor = resultadoF.insertId;

                const [resultadoT] = await conexao.query("INSERT INTO telefone (fornecedor_id, numero_telefone, tipo, principal) VALUES (?,?,?,?)", [idFornecedor, numeroTelefone, tipoTelefone, principal]);

                if (resultadoT) {
                    const [resultadoE] = await conexao.query("INSERT INTO endereco (logradouro, numero, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?)", [logradouro, numero, bairro, cidade, estado, cep]);

                    if (resultadoE) {
                        const idEndereco = resultadoE.insertId;

                        const resultFornecedorEndereco = await conexao.query("INSERT INTO fornecedor_endereco (endereco_id, fornecedor_id) VALUES (?,?)", [idEndereco, idFornecedor]);

                        return resultFornecedorEndereco;
                    }
                }
            }
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query("SELECT f.id, f.nome_razao_social, f.nome_fantasia, f.cnpj, f.email, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM fornecedor f JOIN telefone t ON f.id = t.fornecedor_id JOIN fornecedor_endereco fe ON f.id = fe.fornecedor_id JOIN endereco e ON e.id = fe.endereco_id");
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query("SELECT f.id, f.nome_razao_social, f.nome_fantasia, f.cnpj, f.email, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM fornecedor f JOIN telefone t ON f.id = t.fornecedor_id JOIN fornecedor_endereco fe ON f.id = fe.fornecedor_id JOIN endereco e ON e.id = fe.endereco_id WHERE f.id = ?", [id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id) => {
        try {
            const [resultadoF] = await conexao.query("UPDATE fornecedor SET nome_razao_social = ?, nome_fantasia = ?, cnpj = ?, email = ?, situacao = ? WHERE id = ?", [nomeRazaoSocial, nomeFantasia, cnpj, email, situacao, id]);

            if (resultadoF.affectedRows > 0) {
                const [resultadoT] = await conexao.query("UPDATE telefone SET numero_telefone = ?, tipo = ?, principal = ? WHERE fornecedor_id = ?", [numeroTelefone, tipoTelefone, principal, id]);

                if (resultadoT.affectedRows > 0) {
                    const resultadoE = await conexao.query("UPDATE endereco e JOIN fornecedor_endereco fe ON e.id = fe.endereco_id SET e.logradouro = ?, e.numero = ?, e.bairro = ?, e.cidade = ?, e.estado = ?, e.cep = ? WHERE fe.fornecedor_id = ?", [logradouro, numero, bairro, cidade, estado, cep, id]);
                    return resultadoE;
                }
            }
        } catch (erro) {
            throw erro;
        }
    },

    deletar: async (id) => {
        try {
            const [resultadoE] = await conexao.query("DELETE e FROM endereco e JOIN fornecedor_endereco fe ON fe.endereco_id = e.id WHERE fe.fornecedor_id = ?", [id]);

            if (resultadoE.affectedRows > 0) {
                const [resultadoF] = await conexao.query("DELETE FROM fornecedor WHERE id = ?", [id]);
                return resultadoF;
            }
        } catch (erro) {
            throw erro;
        }
    },

    pesquisar: async (nome) => {
        try {
            const [resultado] = await conexao.query("SELECT f.id, f.nome_razao_social, f.nome_fantasia, f.cnpj, f.email, f.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM fornecedor f JOIN telefone t ON f.id = t.fornecedor_id JOIN fornecedor_endereco fe ON f.id = fe.fornecedor_id JOIN endereco e ON e.id = fe.endereco_id WHERE f.nome_razao_social LIKE ? OR f.nome_fantasia LIKE ?", [`%${nome}%`, `%${nome}%`]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },
}

export default modelFornecedor;
