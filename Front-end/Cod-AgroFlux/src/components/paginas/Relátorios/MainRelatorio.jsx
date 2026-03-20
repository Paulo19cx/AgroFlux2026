import Card from "../../Card";

function MainRelatorio() {

    return (
        <>
            <main class=" col-md-10 flex-grow-1 col-lg-10 px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 class="h2">Relatório e Informações Gerais</h1>
                </div>

                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title text-secondary">Total de Vendas</h6>
                                <p class="h3 card-text text-success">R$ 336.000</p>
                                <p class="h6 card-text text-secondary">508 Transações</p>
                                <div className="verde-circulo float-end"><i class="fi fi-br-cart-shopping-fast fs-5"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="card ">
                            <div class="card-body">
                            <h6 class="card-title text-secondary">Lucro Total</h6>
                                <p class="h3 card-text text-success">R$ 130.000</p>
                                <p class="h6 card-text text-success">Margem: 38.7%</p>
                                <div className="verde-circulo float-end"></div>
                            </div>
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                            <h6 class="card-title text-secondary">Custos Totais</h6>
                                <p class="h3 card-text text-danger">R$ 206.000</p>
                                <p class="h6 card-text text-secondary">61.3% do faturamento</p>
                                <div className="vermelho-circulo float-end"></div>
                            </div>
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="card">
                            <div class="card-body">
                            <h6 class="card-title text-secondary">Ticket Médio</h6>
                                <p class="h3 card-text text-primary">R$ 661.42</p>
                                <p class="h6 card-text text-secondary">Por venda</p>
                                <div className="azul-circulo float-end"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    );
}

export default MainRelatorio;