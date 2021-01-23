import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, ButtonGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addBoard} from "../../redux/actions";

import './board-card-add.css';

const BoardCardAdd = ({addBoard, boards}) => {
    const [isAddMode, setMode] = useState(false);
    const [boardName, setBoardName] = useState('');

    const cancelAdd = () => setMode(!isAddMode);

    const handleChange = e => setBoardName(e.target.value);

    const add = () => {
        const newId = boards.length + 1;

        const board = {
            name: boardName || 'New board',
            key: newId,
            id: newId
        };

        addBoard(board);
        setMode(!isAddMode);
        setBoardName('');
    };

    const handleKeyUp = ({code: key}) => {
        if (key === 'Enter') add();
    };

    // component views

    const button = <div className="board-card add button" onClick={cancelAdd}>
        <h3>Add new board</h3>
    </div>;

    const input = <div className="board-card add input">
        <h3>Board name</h3>
        <Form.Control type="text"
                      value={boardName}
                      onChange={handleChange}
                      placeholder="New board"
                      onKeyUp={handleKeyUp}
        />
        <ButtonGroup>
            <Button variant="link" onClick={add}>Add</Button>
            <Button variant="link" onClick={cancelAdd}>Cancel</Button>
        </ButtonGroup>
    </div>;

    return isAddMode ? input : button
}


export default connect(state => state.board, {addBoard})(BoardCardAdd);