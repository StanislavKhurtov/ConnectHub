import React from 'react';
import profile from "./Profile.module.css";


export const Profile = () => {
    return (
        <nav className={profile.profile}>
            <div className={profile.item}>
                <a href="src/Components/Main/Main#">Profile</a>
            </div>
            <div className={profile.item}>
                <a href="src/Components/Main/Main#">Message</a>
            </div>
            <div className={profile.item}>
                <a href="src/Components/Main/Main#">News</a>
            </div>
            <div className={profile.item}>
                <a href="src/Components/Main/Main#">Music</a>
            </div>
            <div className={profile.item}>
                <a href="src/Components/Main/Main#">Settings</a>
            </div>
        </nav>
    );
}

