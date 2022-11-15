import { Link } from "react-router-dom";

function EliminarTool(props) {
    let url = props.path + "/delete/" + props.id;
    return (
        <Link to={url}>
            <span className="material-symbols-outlined delupt">delete</span>
        </Link>
    );
}

export default EliminarTool;
