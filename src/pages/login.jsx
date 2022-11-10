import { Link } from "react-router-dom";

function Login({ logo }) {
    return (
        <div>
            <main className="registerlogin">
                <p className="fs-1 fw-bold">Iniciar sesión</p>
                <form>
                    <div className="container">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <span className="material-symbols-outlined">
                                    alternate_email
                                </span>
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo electrónico"
                                aria-label="Correo electrónico"
                                aria-describedby="basic-addon1"
                                required={true}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"
                                ><span className="material-symbols-outlined"> key </span></span
                            >
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                aria-label="Contraseña"
                                aria-describedby="basic-addon1"
                                required={true}
                            />
                        </div>
                        <div className="btnlogin">
                            <Link to="/gestionardeudas"
                                ><button type="submit" className="btn btn-secondary">
                                    Acceder
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Login;