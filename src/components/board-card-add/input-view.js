import Form from "react-bootstrap/Form";
import {useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {BACKEND_URL} from "../../connection";

const InputView = ({swapAddMode, toRefresh}) => {
    const [name, setName] = useState('');

    const handleChange = e => setName(e.target.value);
    const handleKeyUp = ({code: key}) => (key === 'Enter') && add();

    const add = () => {

        const board = {
            name: name || 'New board',
            cols: []
        };

        fetch(BACKEND_URL + '/boards', {
            method: 'POST',
            body: JSON.stringify(board),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(toRefresh);
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

export default InputView;