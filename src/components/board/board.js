import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './board.css';
import ColList from "../col-list/col-list";

const Board = (/*{match}*/) => {
    // const board_id = match.params.id;

    return (
        <div>
            <Link to="/" className="btn btn-link">Home</Link>
            <ColList/>
        </div>
    )
}

export default connect(state => state.board, null)(Board);