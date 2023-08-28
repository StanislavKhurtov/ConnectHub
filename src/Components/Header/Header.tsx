import React from 'react';
import header from './Header.module.css';
import logo from '../../assets/logo/logo.png'

export const Header =()=> {
    return (
        <div className={header.header}>
            <div className={header.container}>
                <div className={header.logo}>
                    <img className="image"
                         src={logo}
                         alt="logo image"/>
                </div>
            </div>
        </div>
    );
}
