import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import MainEditarFuncionario from "./MainEditarFuncionario";

function EditarFuncionario() {
    return (
        <>
            <title>Editar</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarFuncionario />
                </div>
            </div>
        </>
    );
}

export default EditarFuncionario;