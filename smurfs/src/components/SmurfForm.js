import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/actions';

const SmurfForm = props => {
    const [smurfPost, setSmurfPost] = useState({
        name: "",
        age: "",
        height: ""
    });

    // const handleChanges = e => {
    //     setSmurfPost({
    //         ...smurfPost,
    //         [e.target.name]: e.target.value
    //     })
    // }

    const handleName = e => {
        setSmurfPost({
            ...smurfPost,
            name: e.target.value
        })
    }

    const handleAge = e => {
        setSmurfPost({
            ...smurfPost,
            age: e.target.value
        })
    }

    const handleHeight = e => {
        setSmurfPost({
            ...smurfPost,
            height: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.postSmurfs(smurfPost);
        setSmurfPost({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <form>
            <input 
                type="text"
                placeholder="Smurf Name"
                value={smurfPost.name}
                onChange={handleName}
            />

            <input 
                type="text"
                placeholder="Smurf Age"
                value={smurfPost.age}
                onChange={handleAge}
            />

            <input 
                type="text"
                placeholder="Smurf Height"
                value={smurfPost.height}
                onChange={handleHeight}
            />

            <button onClick={handleSubmit}>Submit</button>

        </form>
    )
    
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);