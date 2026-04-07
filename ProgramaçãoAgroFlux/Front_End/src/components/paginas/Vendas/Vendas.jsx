import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainVendas from "./MainVendas";

function Vendas() {
    return (
        <>
            <title>Vendas</title>
     
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainVendas />
                </div>
            </div>
        </>
    );
}

export default Vendas;