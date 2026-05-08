import conexao from '../../config/db.js';

const modelCliente = {
    cadastrar: async (empresaId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao) =>{
        try {
            const resultado = await conexao.query("INSERT INTO clinte (empresa_id, nome_razaoSocial, nome_fantasia, cnpj, email, situacao, telefone) VALUES (?,?,?,?,?,?)", [empresaId, nomeRazaoSocial, nomeFantasia, cnpj, email, situacao]);
            return resultado;
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