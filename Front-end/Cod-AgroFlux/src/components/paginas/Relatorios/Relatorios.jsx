import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainRelatorio from "./MainRelatorio";

function Relatorio() {
    return (
        <>
            <title>Relatórios</title>
            
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainRelatorio />
                </div>
            </div>
        </>
    );
}

export default Relatorio;