import React from 'react';
import './MenuItem.css';

function MenuItem({active, text, Icon}) {
    return (
        <div className={`menu_item ${active && 'menu_item--active'}`}>
            <Icon />
            <h3>{text}</h3>
        </div>
    )
}

export default MenuItem;
