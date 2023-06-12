import React from 'react';
import navbar from "./Navbar.module.css";



export const Navbar = () => {
    return (
        <nav className={navbar.profile}>
            <div className={navbar.item}>
                <a href="src/Components/Main/Main#">Profile</a>
            </div>
            <div className={navbar.item}>
                <a href="src/Components/Main/Main#">Message</a>
            </div>
            <div className={navbar.item}>
                <a href="src/Components/Main/Main#">News</a>
            </div>
            <div className={navbar.item}>
                <a href="src/Components/Main/Main#">Music</a>
            </div>
            <div className={navbar.item}>
                <a href="src/Components/Main/Main#">Settings</a>
            </div>
        </nav>
    );
}

