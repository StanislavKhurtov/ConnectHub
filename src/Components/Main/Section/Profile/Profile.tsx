import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import {MyPosts} from "./Section/MyPosts/MyPosts";
import profile from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={profile.body}>
            <Image/>
            <Avatar/>
            <MyPosts/>
        </div>
    );
}


