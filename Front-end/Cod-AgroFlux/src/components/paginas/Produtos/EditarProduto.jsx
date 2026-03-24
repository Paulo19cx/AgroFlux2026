import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainEditarProduto from "./MainEditarProduto";

function EditarProduto(){
    return (
        <>
            <title>EditarFuncionario</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEditarProduto />
                </div>
            </div>
        </>
    );
}

export default EditarProduto;