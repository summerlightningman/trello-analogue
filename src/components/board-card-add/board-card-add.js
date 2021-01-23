import {connect} from 'react-redux';

import './board-card-add.css';
import ButtonView from "./button-view";
import InputView from "./input-view";

const BoardCardAdd = ({isAddMode}) => isAddMode ? <InputView/> : <ButtonView/>;

export default connect(state => state.board, null)(BoardCardAdd);