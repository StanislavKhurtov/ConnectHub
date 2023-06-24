import React from "react";
import main from './Main.module.css';
import {Navbar} from "./Section/Navbar/Navbar";
import {Profile} from "./Section/Profile/Profile";
import {Dialogs} from "./Section/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./Section/News/News";
import {Settings} from "./Section/Settings/Settings";
import {Music} from "./Section/Music/Music";


export const Main = () => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar/>
                <div className={main.body}>
                    <Route path='/dialogs' component={Profile}/>
                    <Route path='/profile' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

            </div>
        </div>
    );
}






