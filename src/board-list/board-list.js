import React from 'react';
import BoardAdd from "../board-add/board-add";

const BoardList = () => {
    const boards = [];

    const toAddBoard = (name) => {
        boards.push('BOARD')
    }

    return (
        <BoardAdd toAddBoard={toAddBoard}/>
        // {boards.map((board, idx) => board)}
    )
};

export default BoardList;