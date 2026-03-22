import Card from "../../Card";
import Grafico from "../../Template/Grafico";

function MainRelatorio() {

    return (
        <>
            <main class="ph-main-shell px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Relatório e Informações Gerais</h1>
                </div>

                {/* Código das Estastísticas */}
                <div class="row">
                    <div class="col-sm-3 hh-mb">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Total de Vendas</h6>
                                <p class="h3 card-text text-success">R$ 336.000</p>
                                <p class="h6 card-text text-secondary">508 Transações</p>
                                <div className="hh-verde-circulo float-end"><i class="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card ">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Lucro Total</h6>
                                <p class="h3 card-text text-success">R$ 130.000</p>
                                <p class="h6 card-text text-success">Margem: 38.7%</p>
                                <div className="hh-verde-circulo float-end"><i class="fi fi-br-arrow-trend-up hh-icon text-success"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Custos Totais</h6>
                                <p class="h3 card-text text-danger">R$ 206.000</p>
                                <p class="h6 card-text text-secondary">61.3% do faturamento</p>
                                <div className="hh-vermelho-circulo float-end"><i class="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Ticket Médio</h6>
                                <p class="h3 card-text text-primary">R$ 661.42</p>
                                <p class="h6 card-text text-secondary">Por venda</p>
                                <div className="hh-azul-circulo float-end"><i class="fi fi-br-dollar hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Código Estastísticas do Estoque */}
                <div class="row">
                    <div class="col-sm-4 d-flex justify-content-center">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Valor em Estoque</h6>
                                <p class="h3 card-text text-roxo">R$ 50.600</p>
                                <p class="h6 card-text text-secondary">6 Produtos</p>
                                <div className="hh-roxo-circulo float-end"><i class="fi fi-br-box-open hh-icon text-roxo"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card ">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Estoque Total</h6>
                                <p class="h3 card-text text-primary">750</p>
                                <p class="h6 card-text text-secondary">Unidades</p>
                                <div className="hh-azul-circulo float-end"><i class="fi fi-br-arrow-trend-up hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Estoque Total</h6>
                                <p class="h3 card-text text-laranja">2</p>
                                <p class="h6 card-text text-secondary">Abaixo do Mínimo</p>
                                <div className="hh-laranja-circulo float-end"><i class="fi fi-br-diamond-exclamation hh-icon text-laranja"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grafico de Barra */}
                <Grafico />

            </main>
        </>
    );
}

export default MainRelatorio;