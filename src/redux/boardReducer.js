import {ADD_BOARD, DELETE_BOARD, SWAP_ADD_MODE} from "./types";

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
        case DELETE_BOARD:
            return {...state, boards: state.boards.filter(board => board.id !== action.payload)}
        default:
            return state
    }
};