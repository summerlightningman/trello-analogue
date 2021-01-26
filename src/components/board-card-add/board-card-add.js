import {connect} from 'react-redux';

import './board-card-add.css';
import ButtonView from "./button-view";
import InputView from "./input-view";
import {swapAddMode} from "../../redux/actions";

const BoardCardAdd = ({isAddMode, swapAddMode, toRefresh}) =>
    isAddMode
    ? <InputView swapAddMode={swapAddMode} toRefresh={toRefresh}/>
    : <ButtonView swapAddMode={swapAddMode}/>;

export default connect(state => state.board, {swapAddMode})(BoardCardAdd);