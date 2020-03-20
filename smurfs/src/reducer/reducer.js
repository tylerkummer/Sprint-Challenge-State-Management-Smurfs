import { GET_SMURFS, UPDATE_SMURFS, SET_ERROR } from "../actions/actions";

const initialState = {
    smurfs: [],
    isFetchingSmurfs: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    console.log("Payload", action.payload);
    switch(action.type){
        case GET_SMURFS:
            return {
                ...state,
                smurfs: [],
                isFetchingSmurfs: true,
                error: ""
            };
        case UPDATE_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                isFetchingSmurfs: false,
                error: ""
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingSmurfs: false,
                error: action.payload
            };
        default:
            return state;
    }
}