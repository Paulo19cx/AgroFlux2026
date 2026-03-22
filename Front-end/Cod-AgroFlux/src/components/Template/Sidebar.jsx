import { Link } from "react-router";

function Sidebar() {
    return (
        <>
            <aside
                id="sidebarMenu"
                className="d-md-block sidebar collapse ph-bg-sidebar-navbar ph-sidebar-shell"
            >
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column gap-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black" aria-current="page">
                                <i className="fi fi-rr-home" aria-hidden="true"></i>Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/clientes" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rs-users" aria-hidden="true"></i>Clientes
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/funcionarios" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rs-user-gear" aria-hidden="true"></i>Funcionários
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/produtos" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rr-box-open-full" aria-hidden="true"></i>Produtos
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/vendas" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rr-shopping-cart" aria-hidden="true"></i>Vendas
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/fornecedores" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rr-truck-side" aria-hidden="true"></i>Fornecedores
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/estoque" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rr-warehouse-alt" aria-hidden="true"></i>Estoque
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/relatorios" className="nav-link d-flex align-items-center fw-normal ph-padding-left gap-3 text-black">
                                <i className="fi fi-rr-ballot" aria-hidden="true"></i>Relatórios
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;