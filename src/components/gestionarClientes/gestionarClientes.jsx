import NavbarGestion from "../navbar/navbarGestion";

function GestionarClientes(props) {
    return (
        <div className="container-fluid">
                <NavbarGestion />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="row">
                        <div className="col-6 table-responsive">
                            <table className="table table-striped-columns table-sm mt-4">
                                <thead>
                                    <tr>
                                        <th colspan="5">Clientes</th>
                                    </tr>
                                    <tr>
                                        <th scope="col"># Documento</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Correo electrónico</th>
                                        <th scope="col">Teléfono</th>
                                        <th scope="col">Dirección</th>
                                        <th scope="col">Gestionar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>irrelevant</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                        <td>tabular</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                        <td>data</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                        <td>text</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <h3 className="titulofiar infobutton">
                                Crea un cliente aquí:
                            </h3>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        badge
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Número documento"
                                    aria-label="Número documento"
                                    aria-describedby="basic-addon1"
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
                                    <span class="material-symbols-outlined">
                                        call
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Teléfono"
                                    aria-label="Teléfono"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        home
                                    </span>
                                </span>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Dirección"
                                    aria-label="Dirección"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="infobutton">
                                <button type="submit" class="btn btn-info">
                                    Crear cliente
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    );
}

export default GestionarClientes;
