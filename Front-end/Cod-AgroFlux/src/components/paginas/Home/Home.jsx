import Sidebar from "../../template/Sidebar";
import Navbar from "../../template/Navbar";
import MainHome from "./MainHome";

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