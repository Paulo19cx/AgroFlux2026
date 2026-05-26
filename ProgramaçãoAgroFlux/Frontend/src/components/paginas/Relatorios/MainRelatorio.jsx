import Grafico from "../../Template/Grafico";
import GraficoBarraDupla from "../../template/GraficoBarraDupla.jsx";
import GraficoLinha from "../../template/GraficoLinha.jsx";
import GraficoPizza from "../../template/GraficoPizza.jsx";


function MainRelatorio() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Relatório e Informações Gerais</h1>
                </div>

                {/* Estastísticas de Vendas */}
                <div className="row g-3">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Total em Vendas</h6>
                                    <p className="h3 card-text text-success mb-2">R$ 336.000</p>
                                    <p className="h6 card-text text-secondary mb-0">508 Transações</p>
                                </div>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Lucro Total</h6>
                                    <p className="h3 card-text text-success mb-2">R$ 130.000</p>
                                    <p className="h6 card-text text-success mb-0">Margem: 38.7%</p>
                                </div>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Custos Totais</h6>
                                    <p className="h3 card-text text-danger mb-2">R$ 206.000</p>
                                    <p className="h6 card-text text-secondary mb-0">61.3% do faturamento</p>
                                </div>
                                <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Ticket Médio</h6>
                                    <p className="h3 card-text text-primary mb-2">R$ 661.42</p>
                                    <p className="h6 card-text text-secondary mb-0">Por venda</p>
                                </div>
                                <div className="hh-azul-circulo float-end"><i className="fi fi-br-dollar hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estastísticas do Estoque */}
                <div className="row g-3 mt-2">
                    <div className="col-sm-6 col-lg-4">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Valor em Estoque</h6>
                                    <p className="h3 card-text text-roxo mb-2">R$ 50.600</p>
                                    <p className="h6 card-text text-secondary mb-0">6 Produtos</p>
                                </div>
                                <div className="hh-roxo-circulo float-end"><i className="fi fi-br-box-open hh-icon text-roxo"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Estoque Total</h6>
                                    <p className="h3 card-text text-primary mb-2">750</p>
                                    <p className="h6 card-text text-secondary mb-0">Unidades</p>
                                </div>
                                <div className="hh-azul-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <div className="card shadow bg-body-tertiary rounded h-100">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h6 className="card-title text-secondary">Abaixo do Mínimo</h6>
                                    <p className="h3 card-text text-laranja mb-2">2</p>
                                    <p className="h6 card-text text-secondary mb-0">Produtos</p>
                                </div>
                                <div className="hh-laranja-circulo float-end"><i className="fi fi-br-diamond-exclamation hh-icon text-laranja"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-itens-center pt-3 pb-2">
                    {/* Grafico de Barra Dupla */}
                    <div className="d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <GraficoBarraDupla/>
                    </div>

                    {/* Grafico de Linha */}
                    <div className="hh-fundo-grafico d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ms-3">
                        <GraficoLinha/>
                    </div>
                </div>

                <div className="d-flex justify-content-between float-start flex-wrap flex-md-nowrap align-itens-center pt-3 pb-2">
                    {/* Grafico de Pizza */}
                    <div className="hh-fundo-grafico d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ms-3">
                        <GraficoPizza/>
                    </div>

                    {/* Grafico de Barra */}
                    <div className="hh-fundo-grafico d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ms-3">
                        <Grafico/>
                    </div>
                </div>

                   

            </main>
        </>
    );
}

export default MainRelatorio;