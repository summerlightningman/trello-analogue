import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import './board-add.css';

const BoardAdd = ({toAddBoard}) => {
    const [isAddMode, setMode] = useState(false);
    const [boardName, setBoardName] = useState('');

    const handleClick = () => {
        setMode(!isAddMode);
    };

    const handleChange = (e) => {
        setBoardName(e.target.value)
    };

    const handleAdd = () => {
        toAddBoard(boardName);
    };

    const handleKeyUp = ({code: key}) => {
        if (key === 'Enter'){
            toAddBoard(boardName);
        }
    }

    const button = <div className="board-add button" onClick={handleClick}>
        <h3>Add new board</h3>
    </div>;

    const input = <div className="board-add input">
        <h3>Board name</h3>
        <Form.Control type="text"
                      value={boardName}
                      onChange={handleChange}
                      placeholder="New board"
                      onKeyUp={handleKeyUp}
        />
        <Button variant="link" onClick={handleAdd}>Add</Button>
    </div>;

    return isAddMode ? input : button
}

export default BoardAdd;