import { Link, useNavigate } from "react-router";
import LogoAgroFlux from "../../assets/img/Logo-AgroFlux.png";
import iconIg from "../../assets/img/iconMcIg.jfif"

function Navbar() {

    const navigate = useNavigate();

    function sair() {
        localStorage.removeItem("token");
        navigate("/");
    }

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