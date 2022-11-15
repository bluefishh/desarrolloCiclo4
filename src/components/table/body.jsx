import Row from "./row";

function Body(props) {
    return (
        <tbody>
            {props.data.map(function (value, index) {
                return (
                    <Row
                        rowData={value}
                        colums={props.colums}
                        tools={props.tools}
                        path={props.path}
                    />
                );
            })}
        </tbody>
    );
}

export default Body;
