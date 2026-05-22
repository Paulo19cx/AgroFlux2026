import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainFornecedores from "./MainFornecedores";

function Fornecedores() {
    return (
        <>
            <title>Fornecedores</title>
        
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainFornecedores />
                </div>
            </div>
        </>
    );
}

export default Fornecedores;