import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer className="container-fluid py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 text-muted">
                        Inicio
                    </Link>
                </li>
            </ul>
            <p className="text-center text-muted">© 2022</p>
        </footer>
    );
}

export default Footer;