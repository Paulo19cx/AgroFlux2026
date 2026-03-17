import LogoAgroFlux from "../../assets/img/Logo-AgroFlux.png";

function Navbar() {
    return (
        <>
            <header className="navbar sticky-top ph-bg-sidebar-navbar flex-md-nowrap justify-content-start" data-bs-theme="dark">
                <a className="navbar px-4" href="#">
                    <img src={LogoAgroFlux} alt="" />
                </a>

                <p className="ms-5 mt-3">Bem-vindo(a),Guilherme Sérgio!</p>

                <div className="ms-auto d-flex align-items-center gap-1 pe-2">
                    <div className="dropdown text-end">
                        <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle link-light" data-bs-toggle="dropdown" aria-expanded="false">
                            <img
                                src="https://github.com/mdo.png"
                                alt="mdo"
                                width="32"
                                height="32"
                                className="rounded-circle"
                            />
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end text-small">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav flex-row d-md-none mb-0">
                        <li className="nav-item text-nowrap">
                            <button className="nav-link px-2 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
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