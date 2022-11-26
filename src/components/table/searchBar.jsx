import { useState } from "react";

function SearchBar(props) {
    // props.data={props.data}
    // props.colums={props.colums}
    // props.setDataForTable={setDataForTable}
    const [searchText, setSearchText] = useState("");
    let onChangeSearchTextField = function (e) {
        let searchText = e.target.value;
        setSearchText(searchText);
        let results = Search(props.data, props.colums, searchText);
        props.setDataForTable(results);
    };
    return (
        <div class="input-group mb-3 searchbar">
            <input
                type="text"
                class="form-control"
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={searchText}
                onChange={onChangeSearchTextField}
            />
        </div>
    );
}

function Search(data, columns, search) {
    let results = [];
    let included = false;
    data.forEach(function (value, index) {
        included = false;
        columns.forEach(function (column, indexColum) {
            try {
                if (
                    value[column]
                        .toString()
                        .toLowerCase()
                        .indexOf(search.toString().toLowerCase()) >= 0 &&
                    !included
                ) {
                    results.push(value);
                    included = true;
                }
            } catch (e) {}
        });
    });
    return results;
}

export default SearchBar;
