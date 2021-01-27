import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import {BACKEND_URL} from "../../connection";
import './board-card.css';

const BoardCard = ({name, id, toRefresh}) => {
    const [isHidden, setHidden] = useState(true);
    const history = useHistory();

    const goToCard = () => history.push('/board/' + id);
    const deleteBoard = e => {
        e.stopPropagation();
        fetch(BACKEND_URL + '/boards/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(toRefresh);
    };
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    return (
        <div
            className="board-card card"
            onClick={goToCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button className="delete-btn" variant="Link" onClick={deleteBoard} hidden={isHidden}>Х</Button>
            <h3>{name}</h3>
        </div>
    )
}

export default BoardCard;