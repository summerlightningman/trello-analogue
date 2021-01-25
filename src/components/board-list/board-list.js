import BoardCardAdd from '../board-card-add/board-card-add';
import BoardCard from "../board-card/board-card";
import {connect} from 'react-redux';

import './board-list.css';

const BoardList = ({boards}) => {

    return (
        <div className="board-list">
            {boards.map(boardArgs => <BoardCard {...boardArgs}/>)}
            <BoardCardAdd/>
        </div>
    )
};

export default connect(state => state.board, null)(BoardList);