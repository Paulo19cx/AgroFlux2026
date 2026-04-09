import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarCliente from "./MainCadastrarCliente";

function CadastrarCliente() {
    return (
        <>
            <title>Cadastrar Cliente</title>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastrarCliente />
                </div>
            </div>
        </>
    );
}

export default CadastrarCliente;