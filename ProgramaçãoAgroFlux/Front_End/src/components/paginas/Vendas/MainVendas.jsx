import Card from "../../Card";

function MainVendas() {

    return (
        <>
            <main className="ph-main-corpo px-md-4 ph-bg-color">
                <div className="row">
                    <div className="d-flex col-md-12 col-lg-6 justify-content-between align-items-center pt-3 pb-2 mb-3">
                        <h1 className="h5 mt-3">Vendas</h1>
                    </div>
                    
                </div>

                <nav class="navbar">
                    <div class="container-fluid">
                        <form class="d-flex w-100" role="search">
                            <input class="form-control" type="search" placeholder="Buscar por numero da venda, cliente ou forma de pagamento..." aria-label="Search" />
                        </form>
                    </div>
                </nav>

                <div className="col-md-12 col-lg-12 border rounded-3 overflow-hidden">
                    <table className="table table-striped mb-0">
                        <thead className="">
                            <tr className="ph-cabecalho-cor-table">
                                <th scope="col">ID</th>
                                <th scope="col">Nome Fantasia</th>
                                <th scope="col">Email</th>
                                <th scope="col">Data de Cadastro</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        
                    </table>
                </div>

            </main>


        </>
    );
}

export default MainVendas;