import NavbarGestion from "../navbar/navbarGestion";
import { useParams } from "react-router-dom";
//import { getDeuda, getUsers, getProducts } from "../../js/getData";

function EditarDeuda() {
    let { idDeuda } = useParams();
    // let deuda = getDeuda(idDeuda);
    // let datosProductos = getProducts("url", {}, "get", {});
    // let datosClientes = getUsers("url", {}, "get", {});
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">Edita la deuda aquí:</h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined"> key </span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ID"
                        aria-label="ID"
                        aria-describedby="basic-addon1"
                        //defaultValue={deuda.id}
                        required={true}
                        disabled
                    />
                </div>
                <select
                    className="form-select input-group mb-3"
                    aria-label="Default select example"
                    id="selectcliente"
                    required={true}
                >
                    <option disabled>Selecciona el cliente</option>
                    <option></option>
                    {/* {datosClientes.map(function (value, index) {
                        return (
                            <option>
                                {value.firstName} {value.lastName}
                            </option>
                        );
                    })} */}
                </select>
                <select
                    className="form-select input-group mb-3"
                    required={true}
                >
                    <option disabled>Selecciona el producto</option>
                    <option ></option>
                    {/* {datosProductos.map(function (value, index) {
                        return <option>{value.title}</option>;
                    })} */}
                </select>
                <div className="infobutton">
                    <button type="submit" className="btn btn-info">
                        Editar deuda
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditarDeuda;
