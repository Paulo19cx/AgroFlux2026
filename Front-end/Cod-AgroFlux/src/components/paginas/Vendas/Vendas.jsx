import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
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