import GestionarDeudas from "./gestionarDeudas";
import { useState } from "react";
import { getRequest } from "../../js/getData";
import { useEffect } from "react";
import { loadData } from "../../js/getData";
import backendConfig from "../../config";

function DeudasIndex(props) {
    let data = loadData();
    const [datosTabla, setDatosTabla] = useState(data);
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "deudas/all",
            {},
            "get",
            {}
        );
        promiseData
            .then(function (response) {
                console.log(response);
                setState("loaded");
                setDatosTabla(response.data);
            })
            .catch(function (err) {
                setState("error");
                setError(err);
                console.log(err);
            });
    }, []);

    if (state === "error") {
        return (
            <div className="mx-3 d-flex">
                <h3>{error.toString()}</h3>
            </div>
        );
    }
    if (state === "loading") {
        return (
            <div className="mx-3 d-flex">
                <h3>Loading...</h3>
            </div>
        );
    }
    return <GestionarDeudas datosTabla={datosTabla}></GestionarDeudas>;
    //procesar datos
}

export default DeudasIndex;