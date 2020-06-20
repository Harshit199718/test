import React from 'react'
import {ButtonStyle} from '../../styled/Button/button.styled'

function Button(props) {
    return (
        <ButtonStyle bg_color={props.bg_color} font_size = {props.font_size} mt={props.mt} color={props.color}>{props.children}</ButtonStyle>
    )
}

export default Button
