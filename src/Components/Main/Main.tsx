import React from "react";
import main from './Main.module.css';
import {Profile} from "./Section/Profile";
import {Body} from "./Section/Body";


export const Main = () => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Profile/>
                <Body/>
            </div>
        </div>
    );
}






