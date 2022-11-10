import NavbarGestion from "../navbar/navbarGestion";

function EditarProducto() {
    return (
        <div className="container">
            <NavbarGestion />
            <form className="formedit">
                <h3 className="titulofiar infobutton">
                    Edita el producto aquí:
                </h3>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <span className="material-symbols-outlined">category</span>
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
                    <span className="input-group-text" id="basic-addon1">
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
                    <span className="input-group-text" id="basic-addon1">
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
                        Editar producto
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditarProducto;
