import React from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";


export const MyPosts = () => {
    let postData = [
        {id:1, message: "Hi", likesCount: 15},
        {id:2, message: "How is your it-kamasutra", likesCount: 14},
        {id:3, message: "yo", likesCount: 9},
        {id:4, message: "полный пипец", likesCount:10},
        {id:5, message: "Hi", likesCount: 25},
    ]

    return (
        <div>
            My posts
            <div>New Post</div>
            <div className={mp.posts}>
                {postData.map(el => {
                    return (
                        <Post id={el.id} message={el.message} like={el.likesCount} />
                    );
                })}
            </div>
        </div>
    );
};

