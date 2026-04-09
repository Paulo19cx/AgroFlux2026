import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainCliente from "./MainCliente";

function Cliente() {
    return (
        <>
            <title>Cliente</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainCliente />
                </div>
            </div>
        </>
    );
}

export default Cliente;