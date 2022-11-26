import NavbarGestion from "../navbar/navbarGestion";
import MainPage from "../table/mainPage";
// import { getProducts, getUsers } from "../../js/getData";



function GestionarDeuda(props) {
    // let datosProductos = getProducts("url", {}, "get", {});
    // let datosClientes = getUsers("url", {}, "get", {});

    return (
        <div className="container-fluid">
            <NavbarGestion />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="row">
                    <div className="col-6 table-responsive">
                        <MainPage
                            name={"Deudas"}
                            data={props.datosTabla}
                            path={"/gestionardeudas"}
                            colums={[
                                "_id",
                                "cliente.firstName",
                                "productos.title",
                                "fechaFiada",
                                "precioTotal",
                            ]}
                            columsAlias={[
                                "ID",
                                "Cliente",
                                "Productos",
                                "Fecha fiada",
                                "Precio total",
                            ]}
                            tools={["update", "delete"]}
                        />
                    </div>
                    <div className="col-md-4">
                        <h3 className="titulofiar infobutton">
                            Fia un producto a un cliente aquí:
                        </h3>
                        <form>
                            <select
                                className="form-select input-group mb-3"
                                aria-label="Default select example"
                                id="selectcliente"
                                required={true}
                            >
                                <option disabled>Selecciona el producto</option>
                                {/* {datosProductos.map(function (value, index) {
                                    return <option>{value.title}</option>;
                                })} */}
                            </select>
                            <select
                                className="form-select selectpicker input-group marginFormDeudas"
                                required={true}
                            >
                                <option disabled>Selecciona el cliente</option>
                                {/* {datosClientes.map(function (value, index) {
                                    return <option>{value.firstName} {value.lastName}</option>;
                                })} */}
                            </select>
                            <div className="infobutton">
                                <button type="submit" class="btn btn-info btnFormDeuda">
                                    Agregar deuda
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}

export default GestionarDeuda;
