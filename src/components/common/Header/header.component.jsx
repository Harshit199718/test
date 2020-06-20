import React from 'react'
import {HeaderStyle} from '../../styled/Header/header.styled'
import './header.scss'

function Header() {
    return (
        <HeaderStyle>
            <div className="logo-and-toggler">
                <span>LOGO</span>
                <i className="fa fa-bars"></i>
            </div>
        </HeaderStyle>
    )
}

export default Header
