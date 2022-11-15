import Cell from "./cell";
import Tools from "./tools";

function Row(props) {
    // props.rowData={props.data[0]}
    // props.colums={props.colums}
    // props.tools={props.tools}
    return (
        <tr>
            {props.colums.map(function (value, index) {
                return <Cell value={props.rowData[value]} />;
            })}
            <Tools
                path={props.path}
                tools={props.tools}
                id={props.rowData[props.colums[0]]}
            />
        </tr>
    );
}

export default Row;
