import {Container} from 'react-bootstrap';
import BoardList from '../board-list/board-list';
import Board from '../board/board';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {useMemo} from 'react';

import './App.css';

const App = () => {
    const githubLink = useMemo(() => 'https://github.com/summerlightningman', []);
    return (
        <Container>
            <h1>My Trello Analogue</h1>
            <h6>For my <a href={githubLink}>GitHub-repository</a></h6>
            <hr/>
            <Router>
                <Route path="/" exact component={BoardList}/>
                <Route path="/board/:id" component={Board}/>
            </Router>
        </Container>
    );
}


export default App;
