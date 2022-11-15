function Header(props) {
    // tname={props.name}
    // colums={props.columsAlias}
    // tools={props.tools}
    let toolHeader = undefined;

    if (props.tools && props.tools.length > 0) {
        toolHeader = <th scope="col">Gestionar</th>;
    }

    return (
        <thead>
            <tr>
                <th colspan="5">{props.tname}</th>
            </tr>
            <tr>
                {props.colums.map(function (value, index){
                    return <th scope="col">{value}</th>;
                })}
                {toolHeader}
            </tr>
        </thead>
    );
}

export default Header;