import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarProduto from "./MainCadastrarProduto";

function CadastrarProduto() {
    return (
        <>
            <title>Cadastrar Produto</title>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastrarProduto />
                </div>
            </div>
        </>
    );
}

export default CadastrarProduto;