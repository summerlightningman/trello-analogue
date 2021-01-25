import {connect} from 'react-redux';

import './board-card-add.css';
import ButtonView from "./button-view";
import InputView from "./input-view";
import {addBoard, swapAddMode} from "../../redux/actions";

const BoardCardAdd = ({isAddMode, swapAddMode, boards, addBoard}) => isAddMode
    ? <InputView boards={boards} swapAddMode={swapAddMode} addBoard={addBoard}/>
    : <ButtonView swapAddMode={swapAddMode}/>;

export default connect(state => state.board, {swapAddMode, addBoard})(BoardCardAdd);