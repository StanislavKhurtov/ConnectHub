import React from 'react';
import navbar from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={navbar.profile}>
            <div className={navbar.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

