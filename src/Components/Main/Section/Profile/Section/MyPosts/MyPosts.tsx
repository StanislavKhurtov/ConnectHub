import React, {FormEventHandler} from 'react';
import mp from './MyPost.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../../../../Redux/type";
import {Field, reduxForm} from "redux-form";

type MyPostType = {
    posts: PostType[]
    addPost: (values: any) => void
}

export const MyPosts = (props: MyPostType) => {

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={mp.wrapper}>
            <div>My Post</div>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={mp.posts}>{props.posts.map((el: any) => {
                return (
                    <Post key={el.id} id={el.id} message={el.message} like={el.likesCount}/>
                );
            })}
            </div>
        </div>
    );
};




type AddNewProFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const AddNewPostForm = (props: AddNewProFormType) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component={'textarea'}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)