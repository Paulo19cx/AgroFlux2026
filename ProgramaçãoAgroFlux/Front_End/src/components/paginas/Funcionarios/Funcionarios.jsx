import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainFuncionarios from "./MainFuncionarios";


function Funcionario() {
    return (
        <>
            <title>Funcionario</title>
        
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