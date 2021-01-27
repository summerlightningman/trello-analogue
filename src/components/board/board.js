import {Link} from 'react-router-dom';
import './board.css';
import ColList from "../col-list/col-list";

const Board = ({match}) => {
    const board_id = match.params.id;

    return (
        <div>
            <Link to="/" className="btn btn-link">Home</Link>
            <ColList board_id={board_id}/>
        </div>
    )
}

export default Board;