import {Container} from 'react-bootstrap';
import BoardList from '../board-list/board-list';
import Board from '../board/board';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {useMemo} from 'react';
import {connect} from 'react-redux';

import './App.css';

const App = ({header}) => {
    const githubLink = useMemo(() => 'https://github.com/summerlightningman', []);

    return (
        <Container>
            <h1>{header}</h1>
            <h6>For my <a href={githubLink}>GitHub-repository</a></h6>
            <hr/>
            <Router>
                <Route path="/" exact component={BoardList}/>
                <Route path="/board/:id" component={Board}/>
            </Router>
        </Container>
    );
}


export default connect(state => state.board, null)(App);
