import React from "react";
import './board-card.css';

const BoardCard = ({name}) => {
    return (
        <div className="board-card card">
            <h3>{name}</h3>
        </div>
    )
}

export default BoardCard;