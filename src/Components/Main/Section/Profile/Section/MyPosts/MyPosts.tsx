import React from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../../../../Redux/State";


type MyPostType = {
    posts: PostType[]
}

export const MyPosts = (props: MyPostType) => {

    const addPost = () => {
        alert("hello")
    }

    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={mp.posts}>{props.posts.map((el) => {
                return (
                    <Post id={el.id} message={el.message} like={el.likesCount}/>
                );
            })}
            </div>
        </div>
    );
};
