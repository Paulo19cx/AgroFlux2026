import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
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