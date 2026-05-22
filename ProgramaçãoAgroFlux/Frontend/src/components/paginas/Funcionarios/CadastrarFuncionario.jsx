import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarFuncionario from "./MainCadastrarFuncionario";

function CadastrarFuncionario() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastrarFuncionario />
                </div>
            </div>
        </>
    );
}

export default CadastrarFuncionario;
