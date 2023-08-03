import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import profile from './Profile.module.css'
import {PostType, StoreType} from "../../../../Redux/type";
import {MyPostsContainer} from "./Section/MyPosts/MyPostsContainer";


type ProfileType = {
    store: StoreType
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={profile.body}>
            <Image/>
            <Avatar/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
}


