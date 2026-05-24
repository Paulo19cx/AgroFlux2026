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
                {/* Estatísticas Principais */}
                <div className="row">
                    <div className="col-sm-3 hh-mb">
                        <div className="card shadow bg-body-tertiary rounded ms-3">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Lucro Total</h6>
                                <p className="h3 card-text text-success">R$ 33.600</p>
                                <p className="h6 card-text text-success">Margem: 47.9%</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow bg-body-tertiary rounded ms-3">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Custos Totais</h6>
                                <p className="h3 card-text text-danger">R$ 17.500</p>
                                <p className="h6 card-text text-secondary">52.1% do faturamento</p>
                                <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow bg-body-tertiary rounded ms-3">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Lucro Líquido</h6>
                                <p className="h3 card-text text-success">R$ 16.100</p>
                                <p className="h6 card-text text-success">Margem: 47.9%</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-rr-tags hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow bg-body-tertiary rounded ms-3">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Total de Vendas</h6>
                                <p className="h3 card-text text-success">500</p>
                                <p className="h6 card-text text-secondary">Transações</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gráficos */}
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-itens-center pt-3 pb-2">
                    {/* Grafico de Barra */}
                    <div className="d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <Grafico/>
                    </div>

                    {/* Grafico de Linha */}
                    <div className="hh-fundo-grafico d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ms-3">
                        <GraficoLinha/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainHome;