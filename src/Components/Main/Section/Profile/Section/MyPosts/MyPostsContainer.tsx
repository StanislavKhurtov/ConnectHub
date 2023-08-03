import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostType = {
    store:any
}

export const MyPostsContainer = (props: MyPostType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    const onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostAC(text))
    }

    return (
        <MyPosts
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />
    )
}