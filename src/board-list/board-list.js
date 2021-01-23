import React, {useState} from 'react';
import BoardAdd from "../board-add/board-add";
import BoardCard from "../board-card/board-card";

import './board-list.css';

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    const toAddBoard = (name) => {
        const args = {
            name: name || 'New board',
            key: boards.length
        };

        const newBoard = <BoardCard {...args} />;
        setBoards([newBoard].concat(boards));
        return true
    }

    return (
        <>
            {boards}
            <BoardAdd toAddBoard={toAddBoard}/>
        </>
    )
};

export default BoardList;