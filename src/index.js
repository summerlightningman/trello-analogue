import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import {createStore} from 'redux';
import {rootReducer} from "./redux/rootReducer";
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

const app = <Provider store={store}>
    <App/>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));

