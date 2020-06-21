import React from 'react'
import { InputStyle } from '../../styled/Input/input.styled'

function Input() {
    const handleChange = (e) =>{
        console.log(e.target.value)
    }
    return (
        <InputStyle onChange={(e) => handleChange(e)}/>
    )
}

export default Input
