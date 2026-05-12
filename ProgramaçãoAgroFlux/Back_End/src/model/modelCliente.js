import conexao from '../../config/db.js';

const modelCliente = {
    cadastrar: async (empresa_id, nome_razao_social, nome_fantasia, cnpj, email, logradouro, numero, bairro, cidade, estado, cep) =>{
        try {
            const resultadoC = await conexao.query("INSERT INTO cliente (empresa_id, nome_razao_social, nome_fantasia, cnpj, email,) VALUES (?,?,?,?,?)", [empresa_id, nome_razao_social, nome_fantasia, cnpj, email]);   
            const resultadoE = await conexao.query("INSERT INTO endereco (logradouro, numero, bairro, cidade, estado, cep) VALUES (?,?,?,?,?,?", [logradouro, numero, bairro, cidade, estado, cep]);
            
            const idCliente = resultadoC.insertId;
            const idEndereco = resultadoE.insertId;

            const resultClienteEndereco = await conexao.query("INSERT INTO cliente_endereco (endereco_id, cliente_id) VALUES (?,?)", [idEndereco, idCliente]);

            return resultadoC, resultadoE, resultClienteEndereco;
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