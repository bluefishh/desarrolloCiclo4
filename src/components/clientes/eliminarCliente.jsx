import NavbarGestion from "../navbar/navbarGestion";
import { useParams } from "react-router-dom";
import { getCliente } from "../../js/getData";

function EliminarCliente(props) {
    let { idCliente } = useParams();
    let cliente = getCliente(idCliente);
    cliente
        .then(function (response) {
            console.log(response);
            return response.data._id;
        })
        .catch(function (err) {
            console.log(err);
        });
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">
                    Elimina el siguiente cliente aquí:
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
                        //defaultValue={}
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
                        placeholder="Nombres"
                        aria-label="Nombres"
                        aria-describedby="basic-addon1"
                        // defaultValue={usuario.firstName}
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
                        placeholder="Apellidos"
                        aria-label="Apellidos"
                        aria-describedby="basic-addon1"
                        // defaultValue={usuario.lastName}
                        required={true}
                        readOnly={true}
                        disabled
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
                        // defaultValue={usuario.email}
                        required={true}
                        readOnly={true}
                        disabled
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
                        // defaultValue={usuario.phone}
                        required={true}
                        readOnly={true}
                        disabled
                    />
                </div>
                <div className="infobutton">
                    <button type="submit" className="btn btn-danger">
                        Eliminar cliente
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EliminarCliente;
