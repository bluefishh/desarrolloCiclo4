import { Link } from "react-router-dom";

function NavbarGestion(props) {
    return (
        <>
            <div class="container navgestion">
                <header class="d-flex justify-content-center py-3">
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <Link
                                to="/gestionardeudas"
                                class="nav-link btn-warning"
                                aria-current="page"
                            >
                                Gestionar deudas
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gestionarclientes" class="nav-link btn-warning">
                                Gestionar clientes
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gestionarproductos" class="nav-link btn-warning">
                                Gestionar productos
                            </Link>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    );
}

export default NavbarGestion;