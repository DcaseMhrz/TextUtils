import React from 'react'

function Alert(props) {
    return (
        <div style={{height:"60px"}}>
        {props.alert &&<div className="alert alert-success col-md-3 mx-2 " role="alert">
            {props.alert.message}
        </div>}
        </div>
    )
}

export default Alert