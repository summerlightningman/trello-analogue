import {combineReducers} from 'redux';
import {boardReducer} from './boardReducer';
import {colReducer} from "./colReducer";

export const rootReducer = combineReducers({
    board: boardReducer,
    col: colReducer
});