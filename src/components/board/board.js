import {Link} from 'react-router-dom';
import './board.css';

const Board = ({match}) => {
    const board_id = match.params.id;

    return (
        <div>
            <Link to="/" className="btn btn-link">Home</Link>
            <p>A board will be here</p>
            <p>Id of this Board: {board_id}</p>
        </div>

    )
}

export default Board;