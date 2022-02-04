import React from 'react';
import './SideBarRow.css';

function SideBarRow({title, Icons}) {
    return (
        <div className="sidebarrow">
            <Icons className="sidebarrow__logo"/>
            <p className="sidebarrow__title">{title}</p>
        </div>
    )
}

export default SideBarRow;
