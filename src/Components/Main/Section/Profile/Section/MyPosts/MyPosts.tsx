import React, {RefObject} from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../../../../Redux/State";


type MyPostType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostType) => {

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const addPost = () => {
        debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value="";
        }

    }


    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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

