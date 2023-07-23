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
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void

}


export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    message: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType;