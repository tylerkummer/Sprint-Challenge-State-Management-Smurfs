import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurfs } from '../actions/actions';

const SmurfList = ({getSmurfs, smurfs, error, deleteSmurfs}) => {
    useEffect(() => {
        console.log("Use Effect", getSmurfs());
        getSmurfs();
    }, [getSmurfs])

    if(error){
        return <p>{error}</p>
    }

    return (
        <>
            {smurfs.map(smurf => {
                console.log("Smurf", smurf);
                return (
                    <div key={smurf.id}>
                        <p>Name: {smurf.name} <br />
                        Age: {smurf.age} <br />
                        Height: {smurf.height}</p> <br />
                        <button type="button" onClick ={() => {deleteSmurfs(smurf.id)}}>Delete Smurf</button>
                    </div>
                )
            })}
        </>
    )

}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { getSmurfs, deleteSmurfs })(SmurfList);