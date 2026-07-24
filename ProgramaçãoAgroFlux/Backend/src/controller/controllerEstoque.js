import modelEstoque from "../model/modelEstoque.js";

const controllerEstoque = {
    listar: async (req, res) => {
        try {
            const consulta = await modelEstoque.listar();

            return res.status(200).json(consulta);
        } catch (erro) {
            return res.status(500).json({ msg: "Erro no servidor" });
        }
    },
}

export default controllerEstoque;