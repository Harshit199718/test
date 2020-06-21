import React from 'react'
import './checkbox.scss'

function CheckBox(props) {
    return (
        <input id={props.id} checked={props.checked} onChange = {props.checkHandle} type="checkbox" name="" id="checkbox" style={props.mb&&{marginBottom:props.mb}}/>
    )
}

export default CheckBox
