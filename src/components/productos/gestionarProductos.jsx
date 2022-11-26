import NavbarGestion from "../navbar/navbarGestion";
import MainPage from "../table/mainPage";

function GestionarProductos(props) {
    return (
        <div className="container-fluid">
            <NavbarGestion />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="row">
                    <div className="col-6 table-responsive">
                        <MainPage
                            name={"Productos"}
                            data={props.datosTabla}
                            path={"/gestionarproductos"}
                            colums={["_id", "title", "description", "price"]}
                            columsAlias={[
                                "ID",
                                "Nombre",
                                "Descripción",
                                "Precio",
                            ]}
                            tools={["update", "delete"]}
                        />
                    </div>
                    <div className="col-md-4">
                        <h3 className="titulofiar infobutton">
                            Crea un producto aquí:
                        </h3>
                        <form>
                            <div className="input-group mb-3">
                                <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                >
                                    <span className="material-symbols-outlined">
                                        category
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre"
                                    aria-label="Nombre"
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
                                        description
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Descripción"
                                    aria-label="Descripción"
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
                                        attach_money
                                    </span>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Precio"
                                    aria-label="Precio"
                                    aria-describedby="basic-addon1"
                                    required={true}
                                />
                            </div>
                            <div className="infobutton">
                                <button type="submit" className="btn btn-info">
                                    Crear producto
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GestionarProductos;
