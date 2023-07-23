import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import {MyPosts} from "./Section/MyPosts/MyPosts";
import profile from './Profile.module.css'
import {PostType} from "../../../../Redux/type";



type ProfileType = {
    posts: PostType[]
    newPostText: string
    dispatch: any
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={profile.body}>
            <Image/>
            <Avatar/>
            <MyPosts
                posts={props.posts}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}


