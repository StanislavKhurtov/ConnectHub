import {v1} from "uuid";
import {ProfilePageType} from "./type";
import {Dispatch} from "redux";
import {profileAPI} from "../Components/api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


const initialState = {
    posts: [
        {id: v1(), message: "Hi", likesCount: 15},
        {id: v1(), message: "How is your it-kamasutra", likesCount: 14},
        {id: v1(), message: "yo", likesCount: 9},
        {id: v1(), message: "полный пипец", likesCount: 10},
        {id: v1(), message: "Hi", likesCount: 25},
    ],
    profile: null,
    status: '',
    newPostText:''
}


export type setUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: any
}
export type setStatusActionType = {
    type: 'SET_STATUS'
    status: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText:string
}

export type ActionsTypes =
    AddPostActionType
    | setUserProfileActionType
    | setStatusActionType


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: v1(), message: action.newPostText, likesCount: 0};
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}


export const addPostAC = (newPostText:string): AddPostActionType => {
    return {type: ADD_POST, newPostText}
}
export const setUserProfile = (profile: any): setUserProfileActionType => {
    return {type: SET_USER_PROFILE, profile}
}

export const setStatusAC = (status: string): setStatusActionType => {
    return {type: SET_STATUS, status}
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        });
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatusAC(response.data))
        });
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0 ) {
                dispatch(setStatusAC(response.data.status))
            }
        });
}






