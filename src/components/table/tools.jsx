import ActualizarTool from "./actualizarTool";
import EliminarTool from "./eliminarTool";

function Tools(props){
    // props.path={props.path}
    // props.tools={props.tools}
    // props.id={props.rowData[props.colums[0]]}
    if (props.tools && props.tools.length > 0) {
        let toolsElement = [];
        if (props.tools.indexOf("update") >= 0) {
            toolsElement.push(
                ActualizarTool({
                    path: props.path,
                    id: props.id,
                })
            )
        }
        if (props.tools.indexOf("delete") >= 0) {
            toolsElement.push(
                EliminarTool({
                    path: props.path,
                    id: props.id,
                })
            )
        }
        return <td>{toolsElement}</td>;
    }
}

export default Tools;