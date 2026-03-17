import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
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