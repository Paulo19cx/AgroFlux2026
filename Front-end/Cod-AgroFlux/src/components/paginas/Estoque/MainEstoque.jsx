import Card from "../../Card";

function MainEstoque() {

    return (
        <>
            <main class="ph-main-shell px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Controle de Estoque</h1>
                </div>
                {/*Começo da caixas*/}
                <div class="container text-center">
                    <div class="row align-items-start ">
                        <div class="col-4">
                            <div class="shadow ps-3 mb-8 bg-white rounded pricing-card">
                                Total de Entregas
                                <h2 className="cor-numero-1">360</h2>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="shadow ps-3 mb-5 bg-white rounded pricing-card">
                                Total de Saidas
                                <h2 className="cor-numero-2">260</h2>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="shadow ps-3 mb-5 bg-white rounded pricing-card">
                                Saldo em Estoque
                                <h2 className="cor-numero-3 ">661</h2>

                            </div>
                        </div>
                    </div>
                </div>
                {/*começo da saldo do produto*/}
                <div class="container text-center">
                    <div class="row align-items-start ">
                        <div class="col ">
                            <div class="shadow tamanho-caixa mb-5 bg-white rounded pricing-card">
                                Total de Entregas
                                
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
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                            Entrada
                                        </li>
                                    </div>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr >
                                    <td>Descrição do Produto</td>
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                            Saida
                                        </li>
                                    </div>
                                    <th scope="row">20</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr className="table-secondary ">
                                    <td>Descrição do Produto</td>
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                            Entrada
                                        </li>
                                    </div>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr>
                                    <td>Descrição do Produto</td>
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                            Saida
                                        </li>
                                    </div>
                                    <th scope="row">55</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr className="table-secondary ">
                                    <td>Descrição do Produto</td>
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-entrada rounded-4 jp-cor-texto-ativo">
                                            Entrada
                                        </li>
                                    </div>
                                    <th scope="row">92</th>
                                    <td>anônimo</td>
                                    <td>Sem Observações</td>
                                </tr>
                                <tr>
                                    <td>Descrição do Produto</td>
                                    <div className='row justify-content-center'>
                                        <li className="mb-3 text-center jp-linha jp-cor-saida rounded-4 jp-cor-texto-ativo">
                                            Saida
                                        </li>
                                    </div>
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