import NavbarGestion from "../components/navbar/navbarGestion";

function EditarDeuda() {
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">Edita la deuda aquí:</h3>

                <select
                    className="form-select input-group mb-3"
                    aria-label="Default select example"
                    id="selectcliente"
                >
                    <option selected disabled>
                        Selecciona el cliente
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select
                    className="form-select input-group mb-3"
                    multiple
                >
                    <option selected disabled>
                        Selecciona el producto
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="infobutton">
                    <button type="submit" class="btn btn-info">
                        Editar deuda
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditarDeuda;
