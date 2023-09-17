import React, {Component, ComponentType} from 'react';
import main from './Main.module.css';
import {Navbar} from './Section/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {News} from './Section/News/News';
import {Settings} from './Section/Settings/Settings';
import {Music} from './Section/Music/Music';
import {DialogsContainer} from "./Section/Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";
import ProfileContainer from "./Section/Profile/ProfileContainer";
import {Login} from "../Login/Login";


export const Main = () => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar/>
                <div className={main.body}>
                    <Route path='/profile/:userId?' component={ProfileContainer}/>
                    <Route path='/dialogs' component={DialogsContainer}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>
        </div>
    );
};