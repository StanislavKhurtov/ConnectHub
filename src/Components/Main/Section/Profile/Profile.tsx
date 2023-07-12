import React from 'react';
import {Image} from "./Section/Image/Image";
import {Avatar} from "./Section/Avatar/Avatar";
import {MyPosts} from "./Section/MyPosts/MyPosts";
import profile from './Profile.module.css'
import {PostType} from "../../../../Redux/State";



type ProfileType = {
    posts: PostType[]
    addPost:(postMessage: string) =>void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={profile.body}>
            <Image/>
            <Avatar/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
}


