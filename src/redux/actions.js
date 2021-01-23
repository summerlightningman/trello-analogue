import {ADD_BOARD} from "./types";

export const addBoard = (board) => {
    return {
        type: ADD_BOARD,
        payload: board
    }
};