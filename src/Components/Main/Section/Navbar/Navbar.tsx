import React from 'react';
import navbar from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={navbar.profile}>
            <div className={navbar.item}>
                <NavLink to="/profile" activeClassName={navbar.active}>Profile</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/dialogs" activeClassName={navbar.active}>Message</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/news" activeClassName={navbar.active}>News</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/music" activeClassName={navbar.active}>Music</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/users" activeClassName={navbar.active}>Users</NavLink>
            </div>
            <div className={navbar.item}>
                <NavLink to="/settings" activeClassName={navbar.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

