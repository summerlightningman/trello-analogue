import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button, ButtonGroup} from 'react-bootstrap';
import './board-add.css';

const BoardAdd = ({toAddBoard}) => {
    const [isAddMode, setMode] = useState(false);
    const [boardName, setBoardName] = useState('');

    const cancelAdd = () => {
        setMode(!isAddMode);
    };

    const handleChange = (e) => {
        setBoardName(e.target.value)
    };

    const addBoard = () => {
        const result = toAddBoard(boardName);
        if (result) {
            setMode(!isAddMode);
            setBoardName('');
        }
    };

    const handleKeyUp = ({code: key}) => {
        if (key === 'Enter') addBoard();
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
            <Button variant="link" onClick={addBoard}>Add</Button>
            <Button variant="link" onClick={cancelAdd}>Cancel</Button>
        </ButtonGroup>
    </div>;

    return isAddMode ? input : button
}

export default BoardAdd;