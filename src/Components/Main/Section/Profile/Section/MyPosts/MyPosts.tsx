import React, {ChangeEvent, RefObject} from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../../../../Redux/State";


type MyPostType = {
    posts: PostType[]
    newPostText: string
    addPost: () => void
    updatePostText: (newText: string) => void
}

export const MyPosts = (props: MyPostType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost();
        }


    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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

