function Sidebar() {
    return (
        <>
            <div className="sidebar ph-altura-sidebar col-md-3 col-lg-2 p-0 bg-light ph-bg-sidebar">
                <div className="offcanvas-md offcanvas-end bg-light ph-bg-sidebar" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                        
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 active text-black" aria-current="page" href="#"><i className="fi fi-rr-home" aria-hidden="true"></i>Dashboard</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="fi fi-rs-users" aria-hidden="true"></i>Clientes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="fi fi-rs-user-gear" aria-hidden="true"></i>Funcionários</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="bi bi-people" aria-hidden="true"></i>Produtos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="bi bi-graph-up" aria-hidden="true"></i>Vendas</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="bi bi-puzzle" aria-hidden="true"></i>Fornecedores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="bi bi-file-earmark-text" aria-hidden="true"></i>Estoque</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center gap-2 text-black" href="#"><i className="bi bi-file-earmark-text" aria-hidden="true"></i>Relátorios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;