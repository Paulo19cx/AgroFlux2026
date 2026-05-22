import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarEstoque from "./MainCadastrarEstoque";

function CadastrarEstoque() {
    return (
        <>
            <title>Cadastrar Estoque</title>
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

export default CadastrarEstoque;