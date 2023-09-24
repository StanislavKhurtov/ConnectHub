import React from 'react';
import header from './Header.module.css';
import logo from '../../assets/logo/logo.png';
import { NavLink } from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null;
    logout: any
};

export const Header = (props: PropsType) => {
    return (
        <div className={header.header}>
            <div className={header.container}>
                <div className={header.logo}>
                    <img className="image" src={logo} alt="logo image" />
                </div>
                <div className={header.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </div>
    );
};

