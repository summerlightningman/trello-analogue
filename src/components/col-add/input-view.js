import Form from 'react-bootstrap';
import {useState} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

const InputView = () => {
    const [name, setName] = useState('');

    const handleChange = e => setName(e.target.value);
    const handleKeyUp = ({code: key}) => (key === 'Enter') && add();

    const add = () => {

    };

    return (
        <div>
            <Form.Control
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="New column"
                onKeyUp={handleKeyUp}
            />
            <ButtonGroup>
                <Button variant="link">Add</Button>
                <Button variant="link">Cancel</Button>
            </ButtonGroup>
        </div>
    )
};

export default InputView