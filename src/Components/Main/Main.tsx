import React from 'react';
import main from './Main.module.css';
import { Navbar } from './Section/Navbar/Navbar';
import { Profile } from './Section/Profile/Profile';

import { Route } from 'react-router-dom';
import { News } from './Section/News/News';
import { Settings } from './Section/Settings/Settings';
import { Music } from './Section/Music/Music';
import {DialogsContainer} from "./Section/Dialogs/DialogsContainer";

export const Main = () => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar />
                <div className={main.body}>
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </div>
    );
};