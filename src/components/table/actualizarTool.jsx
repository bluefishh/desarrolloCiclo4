import { Link } from "react-router-dom";

function ActualizarTool(props) {
    let url = props.path + "/update/" + props.id;
    return (
        <Link to={url}>
            <span className="material-symbols-outlined delupt ">edit_square</span>
        </Link>
    );
}

export default ActualizarTool;
