import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import {MyPosts} from "./Section/MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <Image/>
            <Avatar/>
            <MyPosts/>
        </div>
    );
}


