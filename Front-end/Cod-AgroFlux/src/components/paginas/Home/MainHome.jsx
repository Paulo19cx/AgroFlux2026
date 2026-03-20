import Card from "../../Card";

function MainHome() {
    let progBarra = 85;
    return (
        <>
            <main className="col-md-9 col-lg-10 flex-grow-1 px-md-4 ph-bg-color ">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                </div>
                <div className="row">
                    <Card progBarra={progBarra} icon="bi bi-cart-fill fs-2 me-3 ph-mb text-sucess" total="R$25.000" nome="Total de Vendas" />
                    <Card total="134" nome="Total de Usuarios" />
                </div>
            </main>
        </>
    );
}

export default MainHome;