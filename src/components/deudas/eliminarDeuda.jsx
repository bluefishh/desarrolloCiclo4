import NavbarGestion from "../navbar/navbarGestion";
import { useParams } from "react-router-dom";
import { getDeuda } from "../../js/getData";

function EliminarDeuda() {
    let { idDeuda } = useParams();
    let deuda = getDeuda(idDeuda);
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">
                    Elimina la deuda aquí:
                </h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">badge</span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ID"
                        aria-label="ID"
                        aria-describedby="basic-addon1"
                        defaultValue={deuda.id}
                        required={true}
                        readOnly={true}
                        disabled
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
                        placeholder="Cliente"
                        aria-label="Cliente"
                        aria-describedby="basic-addon1"
                        defaultValue={deuda.cliente}
                        required={true}
                        readOnly={true}
                        disabled
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">
                            category
                        </span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Productos"
                        aria-label="Productos"
                        aria-describedby="basic-addon1"
                        defaultValue={deuda.productos}
                        required={true}
                        readOnly={true}
                        disabled
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span class="material-symbols-outlined">
                            date_range
                        </span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Fecha"
                        aria-label="Fecha"
                        aria-describedby="basic-addon1"
                        defaultValue={deuda.fecha}
                        required={true}
                        readOnly={true}
                        disabled
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">
                            attach_money
                        </span>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Precio total"
                        aria-label="Precio total"
                        aria-describedby="basic-addon1"
                        defaultValue={deuda.precioTotal}
                        required={true}
                        readOnly={true}
                        disabled
                    />
                </div>
                <div className="infobutton">
                    <button type="submit" className="btn btn-danger">
                        Eliminar deuda
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EliminarDeuda;
