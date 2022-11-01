import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar bg-navbar">
            <div className="container-fluid bgnavbar">
                <img className="logo" src={props.logo} alt="" />
                <Link to="/" className="navbar-brand navname">
                    SHOPKEEPER SUPPORT
                </Link>
                <Link to="/register">
                    <button
                        type="button"
                        className="btn btn-secondary btn-register"
                    >
                        Registrarse
                    </button>
                </Link>
                <Link to="/login">
                    <button type="button" className="btn btn-secondary">
                        Iniciar sesión
                    </button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;