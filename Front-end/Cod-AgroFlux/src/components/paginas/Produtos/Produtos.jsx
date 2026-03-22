import Sidebar from "../../template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainProdutos from "./MainProdutos";

function Produtos() {
    return (
        <>
        <title>Produtos</title>
        
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainProdutos />
                </div>
            </div>
        </>
    );
}

export default Produtos;