import Table from "./table";
import SearchBar from "./searchBar";
import { useState } from "react";

function MainPage(props) {
    const [dataForTable, setDataForTable] = useState(props.data);
    return (
        <>
            <SearchBar
                data={props.data}
                setDataForTable={setDataForTable}
                colums={props.colums}
            />
            <Table
                name={props.name}
                data={dataForTable}
                path={props.path}
                colums={props.colums}
                columsAlias={props.columsAlias}
                tools={props.tools}
            />
        </>
    );
}

export default MainPage;
