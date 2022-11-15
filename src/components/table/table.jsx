import Header from "./header";
import Body from "./body";

function Table(props) {
    // props.name={"Clientes"} #########
    // props.data={datosTabla}
    // props.path={"/gestionarclientes"}
    // props.colums={[
    // "id",
    // "firstname",
    // "lastname",
    // "email",
    // "phone",
    // "address",
    // ]}
    // props.columsAlias={[ #########
    // "# Documento",
    // "Nombres",
    // "Correo electrónico",
    // "Teléfono",
    // "Dirección",
    // ]}
    // props.tools={["update", "delete"]} #########
    return (
        <table className="table table-striped-columns table-sm mt-4">
            <Header
                tname={props.name}
                colums={props.columsAlias}
                tools={props.tools}
            />
            <Body 
                data={props.data}
                path={props.path} 
                colums={props.colums} 
                tools={props.tools} 
            />
        </table>
    );
}

export default Table;
