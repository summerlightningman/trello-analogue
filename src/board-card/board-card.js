import React from "react";
import {useHistory} from "react-router-dom";
import './board-card.css';

const BoardCard = ({name, id}) => {
    const history = useHistory();
    const handleClick = () => history.push('/board/' + id);

    return (
        <div className="board-card card" onClick={handleClick}>
            <h3>{name}</h3>
        </div>
    )
}

export default BoardCard;