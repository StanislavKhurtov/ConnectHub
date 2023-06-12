import React from 'react';
import header from './Header.module.css';


export const Header =()=> {
    return (
        <div className={header.header}>
            <div className="header__container">
                <div className={header.logo}>
                    <img className="image"
                         src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6336fc5bc915769b7f4cfd60_Chronos-p-500.webp"
                         alt="logo image"/>
                </div>
            </div>
        </div>
    );
}
