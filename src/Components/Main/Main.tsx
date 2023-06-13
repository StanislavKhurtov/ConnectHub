import React from "react";
import main from './Main.module.css';
import {Navbar} from "./Section/Navbar/Navbar";
import {Profile} from "./Section/Profile/Profile";


export const Main = () => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar/>
                {/*<Profile/>*/}
            </div>
        </div>
    );
}






