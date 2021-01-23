import {ADD_BOARD} from "./types";

const initialState = {
    boards: []
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return {...state, boards: [action.payload, ...state.boards]}
        default:
            return state
    }
};