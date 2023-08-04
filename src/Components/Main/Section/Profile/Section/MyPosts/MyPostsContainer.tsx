import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {store} from "../../../../../../Redux/redux-store";
import {connect} from "react-redux";
import {PostType, StateType} from "../../../../../../Redux/type";


type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
};

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
};

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            store.dispatch(updateNewPostAC(text))
        },
        addPost: () => {
            store.dispatch(addPostAC());
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

