import Form from "react-bootstrap/Form";
import {useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {connect} from 'react-redux';
import {addBoard, swapAddMode} from "../../redux/actions";

const InputView = ({boards, swapAddMode, addBoard}) => {
    const [name, setName] = useState('');

    const handleChange = (e) => setName(e.target.value);
    const handleKeyUp = ({code: key}) => (key === 'Enter') && add();

    const add = () => {
        const newId = boards.length;

        const board = {
            name: name || 'New board',
            key: newId,
            id: newId
        };

        addBoard(board);
        swapAddMode();
        setName('');
    };

    return (<div className="board-card add input">
        <h3>Board name</h3>
        <Form.Control type="text"
                      value={name}
                      onChange={handleChange}
                      placeholder="New board"
                      onKeyUp={handleKeyUp}
        />
        <ButtonGroup>
            <Button variant="link" onClick={add}>Add</Button>
            <Button variant="link" onClick={swapAddMode}>Cancel</Button>
        </ButtonGroup>
    </div>)
};

export default connect(state => state.board, {swapAddMode, addBoard})(InputView);