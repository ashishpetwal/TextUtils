import React from 'react'

function Alert(props) {
    const Capitalize = (str)=>{
        let word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{height: "50px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.alertMsg}
        </div>}
        </div>
    )
}

export default Alert