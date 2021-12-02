import React from 'react';
import Button from './Button';
const Header = ({title}) => {
    return (
        <div className="header-title">
            <h1 className="title-tag">{title} 
            <Button action="add" text="Add"/>
            </h1>
            
        </div>
    )
}

export default Header;
