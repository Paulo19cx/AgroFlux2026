import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainEditarFornecedor from "./MainEditarFornecedor";

function EditarFornecedor() {
    return (
        <>
            <title>Editar</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarFornecedor />
                </div>
            </div>
        </>
    );
}

export default EditarFornecedor;