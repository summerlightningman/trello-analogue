import BoardCardAdd from '../board-card-add/board-card-add';
import BoardCard from '../board-card/board-card';
import {deleteBoard} from '../../redux/actions';
import {connect} from 'react-redux';

import './board-list.css';


const BoardList = ({boards, deleteBoard}) => {
    return (
        <div className="board-list">
            {boards.map(boardArgs => <BoardCard {...boardArgs} deleteBoard={deleteBoard}/>)}
            <BoardCardAdd/>
        </div>
    )
};

export default connect(state => state.board, {deleteBoard})(BoardList);