import {v1} from "uuid";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_NEW_MESSAGE = 'ADD-MESSAGE';


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

export type StateProps = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

type StoreType = {
    _state: StateProps
    _callSubscriber: (state: StateProps) => void
    getState: () => StateProps
    subscribe: (callback: (state: StateProps) => void) => void
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


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi", likesCount: 15},
                {id: v1(), message: "How is your it-kamasutra", likesCount: 14},
                {id: v1(), message: "yo", likesCount: 9},
                {id: v1(), message: "полный пипец", likesCount: 10},
                {id: v1(), message: "Hi", likesCount: 25},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Stanislav"},
                {id: v1(), name: "Egor"},
                {id: v1(), name: "Sofia"},
                {id: v1(), name: "Natalia"},
                {id: v1(), name: "Alexey"},
                {id: v1(), name: "Artur"},
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How is your it-kamasutra"},
                {id: v1(), message: "yo"},
                {id: v1(), message: "полный пипец"},
                {id: v1(), message: "Hi"},
            ],
        },

    },

    _callSubscriber(state: StateProps) {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsTypes) {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
                let newProfilePage = {
                    ...this._state.profilePage,
                    posts: [...this._state.profilePage.posts, newPost],
                    newPostText: ''
                };
                this._callSubscriber({...this._state, profilePage: newProfilePage});
                break;
            }
            case UPDATE_NEW_POST: {
                let newProfilePage = {...this._state.profilePage, newPostText: action.newText};
                let newState = {...this._state, profilePage: newProfilePage};
                this._state = newState;
                this._callSubscriber(this._state);
                break;
            }

            case ADD_NEW_MESSAGE: {
                let newMessage = {id: v1(), message: action.message};
                let newDialogsPage = {
                    ...this._state.dialogsPage, messages: [...this._state.dialogsPage.messages, newMessage]
                };
                this._callSubscriber({...this._state, dialogsPage: newDialogsPage});
                break;
            }
            default:
                throw new Error("I don't understand this type")
        }
    },
}

export const addPostAC = (): AddPostActionType => {
    return {type: ADD_POST}
}

export const updateNewPostAC = (text: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST, newText: text}
}

export const addMessageActionCreator = (textMessage: string): AddMessageActionType => {
    return {type: ADD_NEW_MESSAGE, message: textMessage}
}












