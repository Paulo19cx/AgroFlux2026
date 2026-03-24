import Card from "../../Card";
import Grafico from "../../Template/Grafico";
import GraficoLinha from "../../Template/GraficoLinha";

function MainHome() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Dashboard</h1>
                </div>
                <div className="d-flex">
                    <div className="col-sm-3">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Lucro Total</h6>
                                <p className="h3 card-text text-success">R$ 33.600</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                            </div>
                            
                        </div>
                        < Grafico/>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Custos Totais</h6>
                                <p className="h3 card-text text-danger">R$ 17.500</p>
                                <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                        <GraficoLinha/>
                    </div>
                    <div className="col-sm-3">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Lucro Líquido</h6>
                                <p className="h3 card-text text-success">R$ 16.100</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-rr-tags hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-sm-3 hh-mb">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title text-secondary">Total de Vendas</h6>
                                    <p className="h3 card-text text-success">500</p>
                                    <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainHome;