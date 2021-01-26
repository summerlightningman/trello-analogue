import {SWAP_ADD_MODE} from "./types";

const initialState = {
    isAddMode: false,
    header: 'My Trello Analogue'
};

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWAP_ADD_MODE:
            return {...state, isAddMode: !state.isAddMode}
        default:
            return state
    }
};