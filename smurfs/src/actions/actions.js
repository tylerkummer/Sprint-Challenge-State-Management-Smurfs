import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const GET_SMURFS_DELETE = "GET_SMURFS_DELETE";
export const UPDATE_SMURFS_DELETE = "UPDATE_SMURFS_DELETE";
export const SET_ERROR_DELETE = "SET_ERROR_DELETE";

export const GET_SMURFS_POST = "GET_SMURFS_POST";
export const UPDATE_SMURFS_POST = "UPDATE_SMURFS_POST";
export const SET_ERROR_POST = "SET_ERROR_POST";

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

export const deleteSmurfs = (id) => dispatch => {
    dispatch({type: GET_SMURFS_DELETE});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log("GET_SMURFS_DELETE", res.data);
            dispatch({type: UPDATE_SMURFS_DELETE, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR_DELETE, payload: `SET_ERROR_DELETE ${err}`});
        })
};


export const postSmurfs = smurfPost => dispatch => {
    dispatch({type: GET_SMURFS_POST});
    axios.post("http://localhost:3333/smurfs", smurfPost)
        .then(res => {
            console.log("GET_SMURFS_POST", res.data);
            dispatch({type: UPDATE_SMURFS_POST, payload: res.data});
        })
        .catch(err => {
            dispatch({type: SET_ERROR_POST, payload: "SET_ERROR_POST", err});
        })
};