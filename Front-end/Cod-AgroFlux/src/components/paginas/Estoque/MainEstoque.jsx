import Card from "../../Card";

function MainEstoque() {

    return (
        <>
            <main class=" col-md-10 flex-grow-1 col-lg-10 px-md-4 ph-bg-color">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Controle de Estoque</h1>
                </div>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col">
                            Total de Entregas
                        </div>
                        <div class="col">
                            Total de Saidas
                        </div>
                        <div class="col">
                            Saldo em Estoque
                        </div>
                    </div>

                    {/* Começo da tabela */}
                    <table class="table">
                        <thead>
                            <tr >
                                <th scope="col">Produto</th>
                                <th scope="col">Tipo</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Responsavel</th>
                                <th scope="col" >Observação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-secondary">
                                <td>Descrição do Produto</td>
                                <td>Entrada</td>
                                <th scope="row">92</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                            <tr>
                                <td>Descrição do Produto</td>
                                <td>Saida</td>
                                <th scope="row">20</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                            <tr className="table-secondary">
                                <td>Descrição do Produto</td>
                                <td>Entrada</td>
                                <th scope="row">194</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                            <tr>
                                <td>Descrição do Produto</td>
                                <td>Saida</td>
                                <th scope="row">55</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                            <tr className="table-secondary">
                                <td>Descrição do Produto</td>
                                <td>Entrada</td>
                                <th scope="row">60</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                            <tr>
                                <td>Descrição do Produto</td>
                                <td>Saida</td>
                                <th scope="row">40</th>
                                <td>anônimo</td>
                                <td>Sem Observações</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default MainEstoque;