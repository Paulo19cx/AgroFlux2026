import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainProdutos from "./MainProdutos";

function Produtos() {
    return (
        <>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainProdutos />
                </div>
            </div>
        </>
    );
}

export default Produtos;