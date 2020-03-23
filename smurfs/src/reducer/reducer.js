import { GET_SMURFS, UPDATE_SMURFS, SET_ERROR, GET_SMURFS_DELETE, UPDATE_SMURFS_DELETE, SET_ERROR_DELETE, GET_SMURFS_POST, UPDATE_SMURFS_POST, SET_ERROR_POST } from "../actions/actions";

const initialState = {
    smurfs: [],
    isFetchingSmurfs: false,
    isPostingSmurfs: false,
    isDeletingSmurfs: false,
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
        case GET_SMURFS_DELETE:
            return {
                ...state,
                smurfs: [],
                isDeletingSmurfs: true,
                error: ""
            };
        case UPDATE_SMURFS_DELETE:
            return {
                ...state,
                smurfs: action.payload,
                isDeletingSmurfs: false,
                error: ""
            };
        case SET_ERROR_DELETE:
            return {
                ...state,
                isDeletingSmurfs: false,
                error: action.payload
            };
        case GET_SMURFS_POST:
            return {
                ...state,
                smurfs: [],
                isPostingSmurfs: true,
                error: ""
            }
        case UPDATE_SMURFS_POST:
            return {
                ...state,
                smurfs: action.payload,
                isPostingSmurfs: false,
                error: ""
            };
        case SET_ERROR_POST:
            return {
                ...state,
                isPostingSmurfs: false,
                error: action.payload
            };
        default:
            return state;
    }
}