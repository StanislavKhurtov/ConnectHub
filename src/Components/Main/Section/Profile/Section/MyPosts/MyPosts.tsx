import React from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New Post</div>
            <div className={mp.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

