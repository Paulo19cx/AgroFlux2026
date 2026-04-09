import Sidebar from "../../Template/Sidebar";
import Navbar from "../../Template/Navbar";
import MainHome from "./MainHome";
import GraficoLinha from "../../Template/GraficoLinha";

function Home() {
    return (
        <>
            <title>Home</title>

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

export default Home;