import React from 'react';
import main from './Main.module.css';
import { Navbar } from './Section/Navbar/Navbar';
import { Profile } from './Section/Profile/Profile';

import { Route } from 'react-router-dom';
import { News } from './Section/News/News';
import { Settings } from './Section/Settings/Settings';
import { Music } from './Section/Music/Music';
import {StoreType} from '../../Redux/type';
import {DialogsContainer} from "./Section/Dialogs/DialogsContainer";

type MainProps = {
    store: any;
};

export const Main: React.FC<MainProps> = (props) => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar />
                <div className={main.body}>
                    <Route path='/profile' render={() => <Profile store={props.store} />} />
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </div>
    );
};