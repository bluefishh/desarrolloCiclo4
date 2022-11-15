import NavbarGestion from "../navbar/navbarGestion";
import Table from "../table/table";
import { getUsers } from "../../js/getData";

function GestionarClientes(props) {
    let datosTabla = getUsers("url", {}, "get", {});
    return (
        <div className="container-fluid">
            <NavbarGestion />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="row">
                    <div className="col-6 table-responsive">
                        <Table
                            name={"Clientes"}
                            data={datosTabla}
                            path={"/gestionarclientes"}
                            colums={[
                                "id",
                                "firstName",
                                "lastName",
                                "email",
                                "phone",
                            ]}
                            columsAlias={[
                                "# Documento",
                                "Nombres",
                                "Apellidos",
                                "Correo electrónico",
                                "Teléfono",
                            ]}
                            tools={["update", "delete"]}
                        />
                    </div>
                    <div className="col-md-4">
                        <h3 className="titulofiar infobutton">
                            Crea un cliente aquí:
                        </h3>
                        <form>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        badge
                                    </span>
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
                                    required={true}
                                />
                            </div>
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
                                    required={true}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
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
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        call
                                    </span>
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
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        home
                                    </span>
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
                                    Crear cliente
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GestionarClientes;
