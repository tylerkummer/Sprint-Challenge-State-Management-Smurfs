import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/actions';

const SmurfList = props => {
    useEffect(() => {
        console.log("Use Effect", props.getSmurfs());
        props.getSmurfs();
    }, [])

    return (
        <>
            {props.smurfs.map(smurf => {
                console.log("Smurf", smurf);
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