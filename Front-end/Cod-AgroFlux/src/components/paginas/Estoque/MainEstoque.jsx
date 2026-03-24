import Card from "../../Card";

function MainEstoque() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="d-flex col-md-9 col-lg-12 justify-content-between align-items-center pt-3 pb-2 mb-3">
                    <h1 className="h5 mt-3">Controle de Estoque</h1>
                </div>
                {/*Começo da caixas*/}
                <div className="container text-center">
                    <div className="row align-items-start ">
                        <div className="col-4">
                            <div className="shadow ps-3 mb-8 bg-white rounded pricing-card">
                                Total de Entregas
                                <h2 className="jp-cor-numero-1 mt-5">360</h2>
                                <div className="hh-verde-circulo float-end"><i className="fi fi-br-cart-shopping-fast hh-icon text-success"></i></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="shadow ps-3 mb-5 bg-white rounded pricing-card">
                                Total de Saidas
                                <h2 className="jp-cor-numero-2 mt-5">260</h2>
                                <div className="hh-vermelho-circulo float-end"><i className="fi fi-br-arrow-trend-down hh-icon text-danger"></i></div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="shadow ps-3 mb-5 bg-white rounded pricing-card">
                                Saldo em Estoque
                                <h2 className="jp-cor-numero-3 mt-5">661</h2>

                                <div className="hh-azul-circulo float-end"><i className="fi fi-br-arrow-trend-up hh-icon text-primary"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*começo da saldo do produto*/}
                <div className="container text-center">
                    <div className="row align-items-start ">
                        <div className="col ">
                            <div className=" ps-2 shadow jp-tamanho-caixa mb-5 bg-white rounded pricing-card">
                                Total de Entregas

                                <div class="jp-container-tabelas">
                                    <table class="jp-minha-tabela">
                                        Fertilizante NPK 10-10-10
                                        <td className="jp-borda-entrada ps-3">entrada:</td>
                                        <td className="jp-borda-entrada ps-3">saida:</td>
                                        <td className="jp-borda-entrada ps-3">total:</td>
                                    </table>
                                    <table class="jp-minha-tabela">
                                        Semente de Soja BRS 1010
                                        <td className="jp-borda-entrada ps-3">entrada:</td>
                                        <td className="jp-borda-entrada ps-3">saida:</td>
                                        <td className="jp-borda-entrada  ps-3">total:</td>

                                    </table>
                                    <table class="jp-minha-tabela">
                                        Defensivo Agrícola Roundup
                                        <td className="jp-borda-entrada  ps-3">entrada:</td>
                                        <td className="jp-borda-entrada  ps-3">saida:</td>
                                        <td className="jp-borda-entrada  ps-3">total:</td>
                                    </table>
                                    <table class="jp-minha-tabela">
                                        Adubo Orgânico Composto
                                        <td className="jp-borda-entrada  ps-3">entrada:</td>
                                        <td className="jp-borda-entrada  ps-3">saida:</td>
                                        <td className="jp-borda-entrada  ps-3">total:</td>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Começo da tabela */}
                    <div className="table-container border rounded-4 overflow-hidden bg-light">
                        <table className="table table-bordered mb-0 ">
                            <thead>
                                <tr className="table-success">
                                    <th scope="col ">Produto</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Quantidade</th>
                                    <th scope="col">Responsavel</th>
                                    <th scope="col" >Observação</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="table-secondary ">
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                                Entrada
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr >
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                                Saida
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">20</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr className="table-secondary ">
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                                Entrada
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr>
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                                Saida
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">55</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr className="table-secondary ">
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                                Entrada
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr>
                                    <td>Descrição do Produto</td>
                                    <td>
                                        <div className='row justify-content-center'>
                                            <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                                Saida
                                            </li>
                                        </div>
                                    </td>
                                    <th scope="row">40</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            </main>
        </>
    );
}

export default MainEstoque;