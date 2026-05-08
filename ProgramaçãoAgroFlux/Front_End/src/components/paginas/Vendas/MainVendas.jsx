import Card from "../../Card";

function MainVendas() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="row">
                    <div className="d-flex col-md-12 col-lg-6 justify-content-between align-items-center pt-3 pb-2 mb-3">
                        <h1 className="h5 mt-3">Vendas</h1>
                    </div>

                    {/* Código da barra de pesquisa */}

                    <input class="form-control cor-pesquisa me-2" type="search" placeholder="Buscar por numero da venda, cliente ou forma de pagamento..." aria-label="Search"/>

                    {/* Código da tabela */}

                    <div className="col-md-12 col-lg-12 border rounded-3 mt-4 overflow-hidden">
                    <table className="table table-striped mb-0">
                        <thead className="">
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Emissão</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Total</th>
                                <th scope="col">Situação</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                </div>
            </main>
        </>
    );
}

export default MainVendas;