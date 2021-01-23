import React, {useState} from 'react';
import BoardAdd from "../board-add/board-add";
import BoardCard from "../board-card/board-card";

import './board-list.css';

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    const toAddBoard = (name) => {
        const board = {
            name: name || 'New board',
            key: boards.length,
            id: boards.length
        };

        setBoards([board].concat(boards));
        return true
    }

    return (
        <>
            {boards.map(boardArgs => <BoardCard {...boardArgs}/>)}
            <BoardAdd toAddBoard={toAddBoard}/>
        </>
    )
};

export default BoardList;