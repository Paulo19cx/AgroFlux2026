import conexao from '../../config/db.js';

const modelCliente = {
    cadastrar: async (nome_razao_social, nome_fantasia, cnpj, email, telefone, tipo, principal, logradouro, numero, bairro, cidade, estado, cep) => {
        try {


            const [resultadoC] = await conexao.query("INSERT INTO cliente (nome_razao_social, nome_fantasia, cnpj, email) VALUES (?,?,?,?)", [nome_razao_social, nome_fantasia, cnpj, email]);

            if (resultadoC) {
                const idCliente = resultadoC.insertId;

                const [resultadoT] = await conexao.query("INSERT INTO telefone (cliente_id, telefone, tipo, principal) VALUES (?,?,?,?)", [idCliente, telefone, tipo, principal]);

                if (resultadoT) {

                    const [resultadoE] = await conexao.query("INSERT INTO endereco (logradouro, numero, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?)", [logradouro, numero, bairro, cidade, estado, cep]);

                    if (resultadoE) {
                        const idEndereco = resultadoE.insertId;

                        const resultClienteEndereco = await conexao.query("INSERT INTO cliente_endereco (endereco_id, cliente_id) VALUES (?,?)", [idEndereco, idCliente]);

                        return resultClienteEndereco;
                    }
                }

            }
        }
        catch (erro) {
            throw erro;
        }
    },

    listar: async () => {
        try {
            const resultado = await conexao.query("SELECT empresa_id, nome_razaoSocial, nome_fantasia, cnpj, email, situacao, telefone FROM cliente");
            return resultado;
        }
        catch (erro) {
            throw erro;
        }
    }
}

export default modelCliente;