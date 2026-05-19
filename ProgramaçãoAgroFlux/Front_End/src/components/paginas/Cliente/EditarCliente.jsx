import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainEditarCliente from "./MainEditarCliente";

function EditarCliente() {
    return (
        <>
            <title>EditarFuncionario</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarCliente />
                </div>
            </div>
        </>
    );
}

export default EditarCliente;
