import React from 'react';
import './Logo.css';
import NyxLogo from '../../../assets/images/nyx-start-trans.png';

function Logo() {
    return (
        <div className="logo">
            <img src={NyxLogo} alt="Logo"/>
        </div>
    )
}

export default Logo;
