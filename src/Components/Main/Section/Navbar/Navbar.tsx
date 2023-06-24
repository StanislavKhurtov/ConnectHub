import React from 'react';
import navbar from "./Navbar.module.css";


export const Navbar = () => {
    return (
        <nav className={navbar.profile}>
            <div className={navbar.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={navbar.item}>
                <a href="/dialogs">Message</a>
            </div>
            <div className={navbar.item}>
                <a href="#">News</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Music</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

