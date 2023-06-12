import React from 'react';
import post from "./Post.module.css"


export const Post = () => {
    return (
        <div className={post.item}>
            <img src="https://cdn.pixabay.com/photo/2023/05/17/08/55/tree-7999477__340.jpg" alt="post logo"/>
            post 1
            <span>like</span>
        </div>
    );
};

export default Post;