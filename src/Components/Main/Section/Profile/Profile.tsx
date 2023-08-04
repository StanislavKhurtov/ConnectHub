import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import profile from './Profile.module.css'
import {MyPostsContainer} from "./Section/MyPosts/MyPostsContainer";



export const Profile = () => {

    return (
        <div className={profile.body}>
            <Image/>
            <Avatar/>
            <MyPostsContainer />
        </div>
    );
}


