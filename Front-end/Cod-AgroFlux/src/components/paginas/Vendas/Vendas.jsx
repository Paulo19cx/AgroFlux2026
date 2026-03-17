import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainVendas from "./MainVendas";

function Vendas() {
    return (
        <>
            <title>Vendas</title>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainVendas />
                </div>
            </div>
        </>
    );
}

export default Vendas;