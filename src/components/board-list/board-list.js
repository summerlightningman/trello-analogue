import BoardCardAdd from '../board-card-add/board-card-add';
import BoardCard from '../board-card/board-card';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './board-list.css';


const BoardList = () => {
    const [boards, setBoards] = useState([]);

    const refreshList = () => fetch('http://localhost:5000/boards').then(resp => resp.json()).then(setBoards);

    useEffect(() => {
       refreshList()
    }, []);


    return (
        <div className="board-list">
            {boards.map(boardArgs =>
                <BoardCard {...boardArgs} key={boardArgs.id} toRefresh={refreshList}/>)}
            <BoardCardAdd toRefresh={refreshList}/>
        </div>
    )
};

export default connect(state => state.board, null)(BoardList);