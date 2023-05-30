import React from "react";


export const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <Profile/>
                <Body/>
            </div>
        </div>
    );
}

const Profile = () => {
    return (
        <nav className="profile">
            <div>Profile</div>
            <div>Message</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
    );
}

const Body = () => {
    return (
        <div className="content">
            <div className="content__picture">
                <img src="https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_640.jpg"
                     alt="content image" className="content__image"/>
            </div>
        </div>
    );
}



