import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainFuncionarios from "./MainFuncionarios";


function Funcionario() {
    return (
        <>
            <title>Funcionario</title>
            <AlternadorDeTema />
            <SelecionarTema />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainFuncionarios />
                </div>
            </div>
        </>
    );
}

export default Funcionario;