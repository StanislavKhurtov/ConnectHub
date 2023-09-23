import {SendMessagecreatorType} from "./dialogs-reducer";
import {AddPostActionType, setStatusActionType, setUserProfileActionType} from "./profile-reducer";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessagesDataType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    profile: any
    status: string
    newPostText: string

}

export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action:any) => void
}





