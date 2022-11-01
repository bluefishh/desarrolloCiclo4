import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-bottom">
                <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
                <Link
                    to="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <img src={props.logo} alt="" />
                </Link>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2 text-muted">
                            Home
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
