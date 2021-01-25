import {ADD_BOARD, CHANGE_HEADER, SWAP_ADD_MODE} from "./types";

const initialState = {
    boards: [],
    isAddMode: false,
    header: 'My Trello Analogue'
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