import {ADD_BOARD, SWAP_ADD_MODE} from "./types";

const initialState = {
    boards: [],
    isAddMode: false
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOARD:
            return {...state, boards: [action.payload, ...state.boards]}
        case SWAP_ADD_MODE:
            return {...state, isAddMode: !state.isAddMode}
        default:
            return state
    }
};