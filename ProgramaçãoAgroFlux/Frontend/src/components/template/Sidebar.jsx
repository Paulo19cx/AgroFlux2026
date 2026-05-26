import { use, useEffect } from "react";
import { Link, useLocation } from "react-router";

function Sidebar() {

    let pagina = useLocation();
    const paginaAtiva = pagina.pathname === '/home'
    const regra = sessionStorage.getItem("regra");

    useEffect(() => {
        // Fechar o menu ao navegar para outra página
        const sidebarElement = document.getElementById('sidebarMenu');
        if (sidebarElement && sidebarElement.classList.contains('show')) {
            const bsCollapse = new (window.bootstrap.Collapse)(sidebarElement, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }, [pagina.pathname]);

    useEffect(() => {
        // Controlar o overflow da página quando menu está aberto/fechado
        const sidebarElement = document.getElementById('sidebarMenu');
        if (sidebarElement) {
            const handleShow = () => {
                document.body.style.overflow = 'hidden';
            };
            const handleHide = () => {
                document.body.style.overflow = 'auto';
            };

            sidebarElement.addEventListener('show.bs.collapse', handleShow);
            sidebarElement.addEventListener('hide.bs.collapse', handleHide);

            return () => {
                sidebarElement.removeEventListener('show.bs.collapse', handleShow);
                sidebarElement.removeEventListener('hide.bs.collapse', handleHide);
            };
        }
    }, []);

    return (
        <>
            <aside id="sidebarMenu" className="d-md-block sidebar collapse ph-bg-sidebar-navbar ph-sidebar-estrutura">
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column gap-3">
                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/home" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black" aria-current="page">
                                    <i className="fi fi-rr-home" aria-hidden="true"></i>
                                    <span>Dashboard</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/clientes" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rs-users" aria-hidden="true"></i>
                                    <span>Clientes</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/funcionarios" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rs-user-gear" aria-hidden="true"></i>
                                    <span>Funcionários</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/produtos" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rr-box-open-full" aria-hidden="true"></i>
                                    <span>Produtos</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/vendas" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rr-shopping-cart" aria-hidden="true"></i>
                                    <span>Vendas</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/fornecedores" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rr-truck-side" aria-hidden="true"></i>
                                    <span>Fornecedores</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/estoque" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rr-warehouse-alt" aria-hidden="true"></i>
                                    <span>Estoque</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link to="/relatorios" className="nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black">
                                    <i className="fi fi-rr-ballot" aria-hidden="true"></i>
                                    <span>Relatórios</span>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;