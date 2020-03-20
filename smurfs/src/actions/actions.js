import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS});
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("GET_SMURFS", res.data);
            dispatch({type: UPDATE_SMURFS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR, payload: "SET_ERROR", err});
        })
};

export const postSmurfs = smurfPost => dispatch => {
    dispatch({type: GET_SMURFS});
    axios.post("http://localhost:3333/smurfs", smurfPost)
        .then(res => {
            console.log("GET_SMURFS", res.data);
            dispatch({type: UPDATE_SMURFS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR, payload: "SET_ERROR", err});
        })
};