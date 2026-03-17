import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import MainHome from "./MainRelatorio";

function Relatorio() {
    return (
        <>
            <title>Relatórios</title>
            
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainHome />
                </div>
            </div>
        </>
    );
}

export default Relatorio;