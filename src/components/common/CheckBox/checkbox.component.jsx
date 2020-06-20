import React from 'react'
import './checkbox.scss'

function CheckBox(props) {
    return (
        <input type="checkbox" name="" id="checkbox" style={props.mb&&{marginBottom:props.mb}}/>
    )
}

export default CheckBox
