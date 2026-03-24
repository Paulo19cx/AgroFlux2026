import Card from "../../Card";
import Grafico from "../../Template/Grafico"

function MainHome() {
    let progBarra = 85;
    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Dashboard</h1>
                </div>
                <div className="row">
                    <Card progBarra={progBarra} icon="bi bi-cart-fill fs-2 me-3 ph-mb text-sucess" total="R$25.000" nome="Total de Vendas" />
                    <Card total="134" nome="Total de Usuarios" />
                </div>

                <Grafico />
            </main>
        </>
    );
}

export default MainHome;