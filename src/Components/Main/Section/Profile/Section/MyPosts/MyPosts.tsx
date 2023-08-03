import React, {ChangeEvent, MouseEvent} from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../../../../Redux/type";


type MyPostType = {
    posts: PostType[]
    newPostText: string
    addPost: any
    updateNewPostText:any
}



export const MyPosts = (props:MyPostType) => {

    const onAddPost = (e:MouseEvent<HTMLButtonElement>) => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea value={props.newPostText === '' ? '' : props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>

            <div className={mp.posts}>{props.posts.map((el:any) => {
                return (
                    <Post key={el.id} id={el.id} message={el.message} like={el.likesCount}/>
                );
            })}
            </div>
        </div>
    );
};