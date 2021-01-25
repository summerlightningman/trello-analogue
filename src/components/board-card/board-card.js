import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {Button} from 'react-bootstrap';
import './board-card.css';

const BoardCard = ({name, id, deleteBoard}) => {
    const [isHidden, setHidden] = useState(true);
    const history = useHistory();

    const handleClick = () => history.push('/board/' + id);
    const handleDelete = e => {
        e.stopPropagation();
        deleteBoard(id);
    };
    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    return (
        <div
            className="board-card card"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Button className="delete-btn" variant="Link" onClick={handleDelete} hidden={isHidden}>Х</Button>
            <h3>{name}</h3>
        </div>
    )
}

export default BoardCard;