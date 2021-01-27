import {useState, useEffect} from "react";
import {BACKEND_URL} from "../../connection";
import Col from "../col/col";
import './col-list.css';
import ColAdd from '../col-add/col-add';

const ColList = ({board_id}) => {
    const [cols, setCols] = useState([]);

    const refreshList = () => fetch(BACKEND_URL + '/boards/' + board_id)
        .then(resp => resp.json())
        .then(({cols}) => setCols(cols));

    useEffect(refreshList, [board_id]);


    return (
        <div className="col-list">
            {cols.map(col => <Col {...col} />)}
            <ColAdd/>
        </div>
    )
};

export default ColList;