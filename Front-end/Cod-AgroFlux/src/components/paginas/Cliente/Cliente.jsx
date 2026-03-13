import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainCliente from "./MainCliente";

function Cliente() {
    return (
        <>
            <title>Cliente</title>

            

            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCliente />
                </div>
            </div>
        </>
    );
}

export default Cliente;