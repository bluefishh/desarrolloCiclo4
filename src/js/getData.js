import axios, { Axios } from "axios";
import backendConfig from "../config";

let users = [{
    "_id": {
      "$oid": "637fb4f906f9f286ab819ddf"
    },
    "firstName": "Harvey",
    "lastName": "Cubillos",
    "email": "email@email.email",
    "phone": "+57 3220000000"
  }
]

function loadData() {
    return users;
}

function getRequest(urlRequest, headers, httpMethod, dataBody) {
    let promiseQuery = axios({
        url: urlRequest,
        headers: headers,
        method: httpMethod,
        data: dataBody,
    });
    return promiseQuery;
}


function getCliente(id) {
    let promiseData = getRequest(
        backendConfig.FULL_API_PATH + 'clientes/get/' + id,
        {},
        "get",
        {}
    );

    return promiseData
}

export { getRequest, loadData, getCliente };