import React, {useState} from 'react';
import BoardAdd from "../board-add/board-add";
import './board-list.css';
import BoardCard from "../board-card/board-card";

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    const toAddBoard = (name) => {
        const newBoard = <BoardCard name={name || 'New board'} key={boards.length}/>
        setBoards([newBoard].concat(boards));
        return true
    }

    return (
        <div>
            {boards}
            <BoardAdd toAddBoard={toAddBoard}/>
        </div>
    )
};

export default BoardList;