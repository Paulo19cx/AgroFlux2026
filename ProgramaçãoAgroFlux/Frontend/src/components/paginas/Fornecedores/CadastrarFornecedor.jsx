import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCadastrarFornecedor from "./MainCadastrarFornecedor";

function CadastrarFornecedor() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCadastrarFornecedor />
                </div>
            </div>
        </>
    );
}

export default CadastrarFornecedor;