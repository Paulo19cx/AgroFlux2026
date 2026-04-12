import conexao from "../../config/db.js";

const controllerRaiz = {
    async raiz(req, res) {
        try {
            const [rows] = await conexao.query("SELECT 1");
            res.status(200).json({ msg: "API esta online" });
        } catch (error) {
            res.status(500).json({ msg: "Erro no servidor" });
        }
    }
}

export default controllerRaiz;