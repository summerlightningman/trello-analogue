import {ADD_BOARD, SWAP_ADD_MODE} from "./types";

export const addBoard = (board) => {
    return {
        type: ADD_BOARD,
        payload: board
    }
};

export const swapAddMode = () => {
    return {
        type: SWAP_ADD_MODE
    }
}