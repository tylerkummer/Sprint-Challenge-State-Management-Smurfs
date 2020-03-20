import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/actions';

const SmurfList = ({ smurfs, getSmurfs }) => {
    useEffect(() => {
        console.log("Use Effect", getSmurfs());
        getSmurfs();
    }, [getSmurfs])

    return (
        <>
            {smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                        {smurf.name} <br />
                        {smurf.age} <br />
                        {smurf.height}
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

export default connect(mapStateToProps, { getSmurfs })(SmurfList);