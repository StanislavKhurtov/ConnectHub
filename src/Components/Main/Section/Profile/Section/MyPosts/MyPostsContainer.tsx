import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../../../../Redux/redux-store";


export const MyPostsContainer = () => {
    let state =store.getState()

    let addPost = () => {
      store.dispatch(addPostAC());
    }

    const onPostChange = (text:string) => {
        store.dispatch(updateNewPostAC(text))
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