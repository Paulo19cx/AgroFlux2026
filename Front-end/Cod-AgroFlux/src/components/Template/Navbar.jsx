import LogoAgroFlux from "../../assets/img/Logo-AgroFlux.png";
import iconIg from "../../assets/img/iconMcIg.jfif"

function Navbar() {
    return (
        <>
            <header className="navbar sticky-top ph-bg-sidebar-navbar flex-md-nowrap justify-content-start" data-bs-theme="dark">
                <a className="navbar px-4" href="#">
                    <img src={LogoAgroFlux} alt="Logo da Empresa" width="130" height=""/>
                </a>

                <h6 className="ms-5 mt-3 mb-3">Bem-vindo(a),Guilherme Sérgio!</h6>

                <div className="ms-auto d-flex align-items-center gap-1 pe-2">
                    <div className="dropdown text-end me-4">
                        <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle link-light" data-bs-toggle="dropdown" aria-expanded="false">
                            <img
                                src={iconIg}
                                alt="mdo"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                        </a>

                        <ul
                            className="dropdown-menu dropdown-menu-end menu-conta-do-usuario"
                            data-bs-theme="light"
                        >
                            <li className="menu-conta-do-usuario-topo">
                                <div className="menu-conta-do-usuario-dados">
                                    <h4 className="menu-suspenso-nome">Guilherme Sérgio</h4>
                                </div>
                            </li>
                            <li><hr className="dropdown-divider menu-conta-do-usuario-divisor m-0" /></li>
                            <li className="menu-conta-do-usuario-area-sair">
                                <a className="dropdown-item menu-conta-do-usuario-link-sair d-flex" href="#">
                                    <span>Logout</span>
                                    <i className="fi fi-rr-sign-out-alt" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav flex-row d-md-none mb-0">
                        <li className="nav-item text-nowrap">
                            <button className="nav-link px-2 text-black" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="bi bi-list" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Navbar;