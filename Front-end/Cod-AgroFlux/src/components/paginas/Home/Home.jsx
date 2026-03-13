import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import SelecionarTema from "../../SelecionarTema";
import AlternadorDeTema from "../../AlternadorDeTema";
import MainHome from "./MainHome";

function Home() {
    return (
        <>
            <title>Home</title>
            <AlternadorDeTema />
            <SelecionarTema />
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