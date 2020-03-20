import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/actions';

const SmurfForm = props => {
    const [smurfPost, setSmurfPost] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChanges = e => {
        setSmurfPost({
            ...smurfPost,
            [e.target.name]: e.target.value
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
        <>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                    value={smurfPost.name}
                    onChange={handleChanges}
                />

                <input
                    type="text"
                    name="age"
                    placeholder="Smurf Age"
                    value={smurfPost.age}
                    onChange={handleChanges}
                />

                <input
                    type="text"
                    name="height"
                    placeholder="Smurf Height"
                    value={smurfPost.height}
                    onChange={handleChanges}
                />
            </form>
            <button onClick={handleSubmit}>Create Smurf</button>
        </>
    )

}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { postSmurfs })(SmurfForm);