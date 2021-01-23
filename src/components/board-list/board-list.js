import BoardCardAdd from '../board-card-add/board-card-add';
import BoardCard from "../board-card/board-card";

import {connect} from 'react-redux';
import './board-list.css';

const BoardList = ({boards}) => {
    return (
        <>
            {boards.map(boardArgs => <BoardCard {...boardArgs}/>)}
            <BoardCardAdd/>
        </>
    )
};

const mapStateToProps = state => state.board;

export default connect(mapStateToProps, null)(BoardList);