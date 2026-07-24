import conexao from "../../config/db.js";

const modelEstoque = {
    listar: async () => {
        try {
            const [resultado] = await conexao.query("SELECT e.id, e.empresa_id, e.produto_id, e.quantidade, e.minimo, DATE_FORMAT(e.atualizado_em, '%d/%m/%Y %H:%i:%s') as atualizado_em, p.nome FROM estoque e JOIN produto p ON e.produto_id = p.id");
            return resultado;
        } catch (erro) {
            throw erro;
        }
    }
}
export default modelEstoque;
