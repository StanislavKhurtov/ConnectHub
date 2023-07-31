import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./type";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initialState= {
    posts: [
        {id: v1(), message: "Hi", likesCount: 15},
        {id: v1(), message: "How is your it-kamasutra", likesCount: 14},
        {id: v1(), message: "yo", likesCount: 9},
        {id: v1(), message: "полный пипец", likesCount: 10},
        {id: v1(), message: "Hi", likesCount: 25},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

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