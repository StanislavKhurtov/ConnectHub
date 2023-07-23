import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./State";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        }
        case 'UPDATE-NEW-POST': {
            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }
}


export const addPostAC = (): AddPostActionType => {
    return {type: ADD_POST}
}

export const updateNewPostAC = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST, newText: text}
}