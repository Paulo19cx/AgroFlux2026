function Sidebar() {
    return (
        <>
            <div className="sidebar ph-altura-sidebar col-md-3 col-lg-2 p-0 ph-bg-sidebar-navbar">
                <div className="offcanvas-md offcanvas-end ph-bg-sidebar" tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
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

                    <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto ms-3">
                        <ul className="nav flex-column gap-3">
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 active text-black" aria-current="page" href="#"><i className="fi fi-rr-home" aria-hidden="true"></i>Dashboard</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rs-users" aria-hidden="true"></i>Clientes</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rs-user-gear" aria-hidden="true"></i>Funcionários</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rr-box-open-full" aria-hidden="true"></i>Produtos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rr-shopping-cart" aria-hidden="true"></i>Vendas</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rr-truck-side" aria-hidden="true"></i>Fornecedores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rr-warehouse-alt" aria-hidden="true"></i>Estoque</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center fw-normal gap-3 text-black" href="#"><i className="fi fi-rr-ballot" aria-hidden="true"></i>Relátorios</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;