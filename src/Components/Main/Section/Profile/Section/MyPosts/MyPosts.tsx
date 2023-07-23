import React, {ChangeEvent, MouseEvent} from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType,addPostAC,updateNewPostAC} from "../../../../../../Redux/State";


type MyPostType = {
    posts: PostType[]
    newPostText: string
    dispatch: any
}

export const MyPosts = (props: MyPostType) => {

    const addPost = (e:MouseEvent<HTMLButtonElement>) => {
            props.dispatch(addPostAC());
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement> ) => {
        let text = e.currentTarget.value;
        if (text) {
            props.dispatch(updateNewPostAC(text))
        }
    }

    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={mp.posts}>{props.posts.map((el) => {
                return (
                    <Post key={el.id} id={el.id} message={el.message} like={el.likesCount}/>
                );
            })}
            </div>
        </div>
    );
};

