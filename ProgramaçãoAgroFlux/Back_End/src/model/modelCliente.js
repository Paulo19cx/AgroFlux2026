import conexao from '../../config/db.js';

const modelCliente = {
    cadastrar: async (nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep) => {
        try {
            const [resultadoC] = await conexao.query("INSERT INTO cliente (nome_razao_social, nome_fantasia, tipo_pessoa, cnpj, email, situacao) VALUES (?,?,?,?,?,?)", [nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao]);

            if (resultadoC) {
                const idCliente = resultadoC.insertId;

                const [resultadoT] = await conexao.query("INSERT INTO telefone (cliente_id, numero_telefone, tipo, principal) VALUES (?,?,?,?)", [idCliente, numeroTelefone, tipoTelefone, principal]);

                if (resultadoT) {

                    const [resultadoE] = await conexao.query("INSERT INTO endereco (logradouro, numero, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?)", [logradouro, numero, bairro, cidade, estado, cep]);

                    if (resultadoE) {
                        const idEndereco = resultadoE.insertId;

                        const resultClienteEndereco = await conexao.query("INSERT INTO cliente_endereco (endereco_id, cliente_id) VALUES (?,?)", [idEndereco, idCliente]);

                        return resultClienteEndereco;
                    }
                }
            }
        } catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const [resultado] = await conexao.query("SELECT c.id, c.empresa_id, c.nome_razao_social, c.nome_fantasia, tipo_pessoa, c.cnpj, c.email, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, c.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM cliente c JOIN telefone t ON c.id = t.cliente_id JOIN cliente_endereco ce ON c.id = ce.cliente_id JOIN endereco e ON e.id = ce.endereco_id");
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    listarPorId: async (id) => {
        try {
            const [resultado] = await conexao.query("SELECT c.id, c.empresa_id, c.nome_razao_social, c.nome_fantasia, c.tipo_pessoa, c.cnpj, c.email, DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') AS data_cadastro, c.situacao, t.numero_telefone, t.tipo, t.principal, e.logradouro, e.numero, e.bairro, e.cidade, e.estado, e.cep FROM cliente c JOIN telefone t ON c.id = t.cliente_id JOIN cliente_endereco ce ON c.id = ce.cliente_id JOIN endereco e ON e.id = ce.endereco_id WHERE c.id = ?", [id]);
            return resultado;
        } catch (erro) {
            throw erro;
        }
    },

    atualizar: async (nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, numeroTelefone, tipoTelefone, principal, logradouro, numero, bairro, cidade, estado, cep, id) => {

        try {
            const [resultadoC] = await conexao.query("UPDATE cliente SET nome_razao_social = ?, nome_fantasia = ?, tipo_pessoa = ?, cnpj = ?, email = ?, situacao = ? WHERE id = ?", [nomeRazaoSocial, nomeFantasia, tipoPessoa, cnpj, email, situacao, id]);

            if (resultadoC.affectedRows > 0) {
                const [resultadoT] = await conexao.query("UPDATE telefone SET numero_telefone = ?, tipo = ?, principal = ? WHERE cliente_id = ?", [numeroTelefone, tipoTelefone, principal, id]);

                if (resultadoT.affectedRows > 0) {
                    const resultadoE = await conexao.query("UPDATE endereco e JOIN cliente_endereco ce ON e.id = ce.endereco_id SET e.logradouro = ?, e.numero = ?, e.bairro = ?, e.cidade = ?, e.estado = ?, e.cep = ? WHERE ce.cliente_id = ?", [logradouro, numero, bairro, cidade, estado, cep, id]);
                    return resultadoE;
                }
            }

        } catch (erro) {
            throw erro;
        }
    },

    deletar: async (id) => {
        try {
            const [resultadoCE] = await conexao.query("DELETE ce FROM cliente_endereco ce JOIN cliente c ON ce.cliente_id = c.id WHERE c.id = ?", [id]);

            if (resultadoCE.affectedRows > 0) {
                const [resultadoT] = await conexao.query("DELETE t FROM telefone t JOIN cliente c ON t.cliente_id = c.id WHERE c.id = ?", [id]);

                if (resultadoT.affectedRows > 0) {
                    const [resultadoE] = await conexao.query("DELETE e FROM endereco e JOIN cliente_endereco ce ON ce.endereco_id = e.id JOIN cliente c ON ce.cliente_id = c.id WHERE c.id = ?", [id]);

                    if (resultadoE.affectedRows > 0) {
                        const resultadoC = await conexao.query("DELETE FROM cliente WHERE id = ?", [id]);

                        return resultadoC;
                    }
                }
            }
        } catch (erro) {
            throw erro;
        }
    }
}

export default modelCliente;