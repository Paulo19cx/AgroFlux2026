import Grafico from "../../Template/Grafico";
import GraficoLinha from "../../template/GraficoLinha";
import GraicoPizza from "../../template/GraficoPizza";

function MainRelatorio() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Relatório e Informações Gerais</h1>
                </div>

                {/* Código das Estastísticas */}
                <div className="row">
                    <div className="col-sm-3 hh-mb">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Total em Vendas</h6>
                                <p className="h3 card-text text-success">R$ 336.000</p>
                                <p className="h6 card-text text-secondary">508 Transações</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Lucro Total</h6>
                                <p className="h3 card-text text-success">R$ 130.000</p>
                                <p className="h6 card-text text-success">Margem: 38.7%</p>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Custos Totais</h6>
                                <p className="h3 card-text text-danger">R$ 206.000</p>
                                <p className="h6 card-text text-secondary">61.3% do faturamento</p>
                                <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Ticket Médio</h6>
                                <p className="h3 card-text text-primary">R$ 661.42</p>
                                <p className="h6 card-text text-secondary">Por venda</p>
                                <div className="hh-azul-circulo float-end"><i className="fi fi-br-dollar hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Código Estastísticas do Estoque */}
                <div className="row">
                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Valor em Estoque</h6>
                                <p className="h3 card-text text-roxo">R$ 50.600</p>
                                <p className="h6 card-text text-secondary">6 Produtos</p>
                                <div className="hh-roxo-circulo float-end"><i className="fi fi-br-box-open hh-icon text-roxo"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card ">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Estoque Total</h6>
                                <p className="h3 card-text text-primary">750</p>
                                <p className="h6 card-text text-secondary">Unidades</p>
                                <div className="hh-azul-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title text-secondary">Estoque Total</h6>
                                <p className="h3 card-text text-laranja">2</p>
                                <p className="h6 card-text text-secondary">Abaixo do Mínimo</p>
                                <div className="hh-laranja-circulo float-end"><i className="fi fi-br-diamond-exclamation hh-icon text-laranja"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-itens-center pt-3 pb-2">
                    {/* Grafico de Barra */}
                    <div className="d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="hh-fundo-grafico"><Grafico titulo="Venda x Custos" periodo="(Último 6 Meses)" /></div>
                    </div>

                    {/* Grafico de Barra */}
                    <div className="hh-fundo-grafico d-flex mb-3 mt-3 w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ms-3">
                        <GraficoLinha titulo="Evolução do Lucro" />
                    </div>

                    {/* Grafico de Pizza */}
                    
                </div>

            </main>
        </>
    );
}

export default MainRelatorio;