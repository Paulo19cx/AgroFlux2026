import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const regra = sessionStorage.getItem("regra");

    const isActive = (paths) =>
        paths.some((path) => location.pathname === path || location.pathname.startsWith(`${path}/`));

    useEffect(() => {
        // Fechar o menu ao navegar para outra página
        const sidebarElement = document.getElementById('sidebarMenu');
        if (sidebarElement && sidebarElement.classList.contains('show')) {
            const bsCollapse = new (window.bootstrap.Collapse)(sidebarElement, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }, [location.pathname]);

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
                        {regra === 'Administrador' && (
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/home']) ? 'active' : ''}`}
                                    aria-current={isActive(['/home']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rr-home" aria-hidden="true"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        )}

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/clientes"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/clientes', '/cadastrar-cliente', '/editar-cliente']) ? 'active' : ''}`}
                                    aria-current={isActive(['/clientes']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rs-users" aria-hidden="true"></i>
                                    <span>Clientes</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/funcionarios"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/funcionarios', '/cadastrar-funcionario', '/editar-funcionario']) ? 'active' : ''}`}
                                    aria-current={isActive(['/funcionarios']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rs-user-gear" aria-hidden="true"></i>
                                    <span>Funcionários</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/produtos"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/produtos', '/cadastrar-produto', '/editar-produto']) ? 'active' : ''}`}
                                    aria-current={isActive(['/produtos']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rr-box-open-full" aria-hidden="true"></i>
                                    <span>Produtos</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/vendas"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/vendas']) ? 'active' : ''}`}
                                    aria-current={isActive(['/vendas']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rr-shopping-cart" aria-hidden="true"></i>
                                    <span>Vendas</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/fornecedores"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/fornecedores']) ? 'active' : ''}`}
                                    aria-current={isActive(['/fornecedores']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rr-truck-side" aria-hidden="true"></i>
                                    <span>Fornecedores</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/estoque"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/estoque']) ? 'active' : ''}`}
                                    aria-current={isActive(['/estoque']) ? 'page' : undefined}
                                >
                                    <i className="fi fi-rr-warehouse-alt" aria-hidden="true"></i>
                                    <span>Estoque</span>
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {regra === 'Administrador' && (
                                <Link
                                    to="/relatorios"
                                    className={`nav-link d-flex align-items-center fw-normal ph-padding-links-sidebar gap-3 text-black ${isActive(['/relatorios']) ? 'active' : ''}`}
                                    aria-current={isActive(['/relatorios']) ? 'page' : undefined}
                                >
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