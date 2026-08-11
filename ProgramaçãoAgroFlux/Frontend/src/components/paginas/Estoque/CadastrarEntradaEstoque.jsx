import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarEstoque from "./MainCadastrarEntradaEstoque";

function CadastrarEntradaEstoque() {
    return (
        <>
            <title>Cadastrar Entrada de Estoque</title>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastrarEstoque />
                </div>
            </div>
        </>
    );
}

export default CadastrarEntradaEstoque;