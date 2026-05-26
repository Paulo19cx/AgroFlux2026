import { Link, useNavigate } from "react-router";
import LogoAgroFlux from "../../assets/img/Logo-AgroFlux.png";
import iconIg from "../../assets/img/iconMcIg.jfif"
import { useEffect } from "react";

function Navbar() {

    const navigate = useNavigate();

    useEffect(() => {
        // Adicionar evento para fechar o menu ao clicar no overlay
        const sidebarElement = document.getElementById('sidebarMenu');
        if (sidebarElement) {
            const handleSidebarToggle = (e) => {
                // Se clicou fora do menu (no overlay), fecha
                if (e.target === document.querySelector('.sidebar-overlay')) {
                    const bsCollapse = new (window.bootstrap.Collapse)(sidebarElement, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            };
            document.addEventListener('click', handleSidebarToggle);
            return () => document.removeEventListener('click', handleSidebarToggle);
        }
    }, []);

    function sair() {
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("regra");
        navigate("/");
    }

    return (
        <>
            <header className="navbar sticky-top ph-bg-sidebar-navbar flex-md-nowrap justify-content-start" data-bs-theme="dark">
                <div className="d-flex align-items-center gap-2 gap-md-0">
                    <button className="btn btn-link d-md-none p-2 pe-md-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list text-black" aria-hidden="true" style={{fontSize: '1.5rem'}}></i>
                    </button>
                    <a className="navbar px-3 px-md-4" href="#">
                        <img src={LogoAgroFlux} alt="Logo da Empresa" width="130" height="auto"/>
                    </a>
                </div>

                <h6 className="ms-2 ms-md-5 mt-3 mb-3 d-none d-sm-block">Bem-vindo(a),Guilherme Sérgio!</h6>

                <div className="ms-auto d-flex align-items-center gap-1 pe-2 pe-md-4">
                    <div className="dropdown text-end me-2 me-md-4">
                        <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle link-dark" data-bs-toggle="dropdown" aria-expanded="false">
                            <img
                                src={iconIg}
                                alt="mdo"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                        </a>

                        <ul
                            className="dropdown-menu dropdown-menu-end ph-dropdown-menu"
                            data-bs-theme="light"
                        >
                            <li className="ph-dropdown-header">
                                <h4 className="ph-user-name">Guilherme Sérgio</h4>
                            </li>
                            <li><hr className="ph-dropdown-divider" /></li>
                            <li className="ph-logout-area">
                                <Link onClick={sair} to="/" className="ph-logout-link">
                                    <span>Logout</span>
                                    <i className="fi fi-rr-sign-out-alt ph-logout-icon" aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;