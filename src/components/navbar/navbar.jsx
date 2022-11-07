import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <img className="logo" src={props.logo} alt="" />
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="navbarnamelink">
                                <h6 className="px-5 mt-2 navbarname">
                                    SHOPKEEPER SUPPORT
                                </h6>
                            </Link>
                        </li>
                    </ul>

                    <div className="text-end">
                        <Link to="/login">
                            <button
                                type="button"
                                className="btn btn-outline-light me-2"
                            >
                                Iniciar sesión
                            </button>
                        </Link>
                        <Link to="/register">
                            <button type="button" className="btn btn-warning">
                                Registrarse
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
