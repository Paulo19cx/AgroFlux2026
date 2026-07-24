import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";

import MainEstoque from "./MainEstoque";

function Estoque() {
    return (
        <>
            <title>Estoque</title>

            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <MainEstoque />
                </div>
            </div>
        </>
    );
}

export default Estoque;