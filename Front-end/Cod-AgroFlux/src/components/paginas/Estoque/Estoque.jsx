import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainEstoque from "./MainEstoque";

function Estoque() {
    return (
        <>
            <title>Estoque</title>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEstoque />
                </div>
            </div>
        </>
    );
}

export default Estoque;