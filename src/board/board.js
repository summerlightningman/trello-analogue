import React from 'react';
import {Link} from "react-router-dom";
import './board.css';

const Board = () => {
    return (
        <div>
            <Link to="/" className="btn btn-link">Go back</Link>
            <p>A board will be here</p>
        </div>

    )
}

export default Board;