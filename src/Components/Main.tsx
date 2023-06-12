import React from "react";
import main from './Main.module.css';



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

const Profile = () => {

    return (
        <nav className={main.profile}>
            <div className={main.item}>
                <a href="#">Profile</a>
            </div>
            <div className={main.item}>
                <a href="#">Message</a>
            </div>
            <div className={main.item}>
                <a href="#">News</a>
            </div>
            <div className={main.item}>
                <a href="#">Music</a>
            </div>
            <div className={main.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

const Body = () => {
    return (
        <div className="content">
            <div className="content__picture">
                <img src="https://cdn.pixabay.com/photo/2023/05/17/08/55/tree-7999477__340.jpg"
                     alt="content image"/>
            </div>

        </div>
    );
}



