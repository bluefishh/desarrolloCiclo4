import NavbarGestion from "../navbar/navbarGestion";

function GestionarProductos(props) {
    return (
        <div className="container-fluid">
                <NavbarGestion />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="row">
                        <div className="col-6 table-responsive">
                            <table className="table table-striped-columns table-sm mt-4">
                                <thead>
                                    <tr>
                                        <th colspan="5">Productos</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Gestionar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,001</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,002</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,003</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                    </tr>
                                    <tr>
                                        <td>1,004</td>
                                        <td>text</td>
                                        <td>random</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,005</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,006</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                    </tr>
                                    <tr>
                                        <td>1,007</td>
                                        <td>placeholder</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                    </tr>
                                    <tr>
                                        <td>1,008</td>
                                        <td>random</td>
                                        <td>data</td>
                                        <td>placeholder</td>
                                    </tr>
                                    <tr>
                                        <td>1,009</td>
                                        <td>placeholder</td>
                                        <td>irrelevant</td>
                                        <td>visual</td>
                                    </tr>
                                    <tr>
                                        <td>1,010</td>
                                        <td>data</td>
                                        <td>rich</td>
                                        <td>dashboard</td>
                                    </tr>
                                    <tr>
                                        <td>1,011</td>
                                        <td>information</td>
                                        <td>placeholder</td>
                                        <td>illustrative</td>
                                    </tr>
                                    <tr>
                                        <td>1,012</td>
                                        <td>text</td>
                                        <td>placeholder</td>
                                        <td>layout</td>
                                    </tr>
                                    <tr>
                                        <td>1,013</td>
                                        <td>dashboard</td>
                                        <td>irrelevant</td>
                                        <td>text</td>
                                    </tr>
                                    <tr>
                                        <td>1,014</td>
                                        <td>dashboard</td>
                                        <td>illustrative</td>
                                        <td>rich</td>
                                    </tr>
                                    <tr>
                                        <td>1,015</td>
                                        <td>random</td>
                                        <td>tabular</td>
                                        <td>information</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-4">
                            <h3 className="titulofiar infobutton">
                                Crea un producto aquí:
                            </h3>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        category
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    aria-label="Nombre"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        description
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción"
                                    aria-label="Descripción"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span class="material-symbols-outlined">
                                        attach_money
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio"
                                    aria-label="Precio"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="infobutton">
                                <button type="submit" class="btn btn-info">
                                    Crear producto
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
        </div>
    );
}

export default GestionarProductos;