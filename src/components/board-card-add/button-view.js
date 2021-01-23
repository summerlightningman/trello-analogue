import {connect} from 'react-redux';
import {swapAddMode} from "../../redux/actions";

const ButtonView = ({swapAddMode}) => {
    return (<div className="board-card add button" onClick={swapAddMode}>
        <h3>Add new board</h3>
    </div>)
}

export default connect(null, {swapAddMode})(ButtonView)
