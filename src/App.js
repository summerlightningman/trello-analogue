import './App.css';
import {Container} from "react-bootstrap";

function App() {
    const githubLink = 'https://github.com/summerlightningman';

    return (
        <Container>
            <h1>My Trello Analogue</h1>
            <h6>For my <a href={githubLink}>GitHub-repository</a></h6>
            <hr/>
        </Container>
    );
}

export default App;
