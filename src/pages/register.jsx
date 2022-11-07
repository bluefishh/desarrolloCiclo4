function Register({ logo }) {
    return (
        <div>
            <main className="registerlogin">
                <p className="fs-1 fw-bold">Registrarse</p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombres"
                                    aria-label="Nombres"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        alternate_email
                                    </span>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo electrónico"
                                    aria-label="Correo electrónico"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        key
                                    </span>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirmar contraseña"
                                    aria-label="Confirmar contraseña"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        person
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Apellidos"
                                    aria-label="Apellidos"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        key
                                    </span>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    aria-label="Contraseña"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        store
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre comercio"
                                    aria-label="Nombre comercio"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnregister">
                    <a href="login.html">
                        <button type="button" className="btn btn-secondary">
                            Registrarse
                        </button>
                    </a>
                </div>
            </main>
        </div>
    );
}

export default Register;
