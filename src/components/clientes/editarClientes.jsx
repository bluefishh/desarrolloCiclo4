import NavbarGestion from "../navbar/navbarGestion";

function EditarCliente() {
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">
                    Edita el cliente aquí:
                </h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">badge</span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Número documento"
                        aria-label="Número documento"
                        aria-describedby="basic-addon1"
                        required={true}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
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
                        required={true}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
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
                        required={true}
                    />
                </div>
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
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">call</span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Teléfono"
                        aria-label="Teléfono"
                        aria-describedby="basic-addon1"
                        required={true}
                    />
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">home</span>
                    </span>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Dirección"
                        aria-label="Dirección"
                        aria-describedby="basic-addon1"
                        required={true}
                    />
                </div>
                <div className="infobutton">
                    <button type="submit" className="btn btn-info">
                        Editar cliente
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditarCliente;
