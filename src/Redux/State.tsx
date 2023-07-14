import {v1} from "uuid";

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

export let store = {
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
    getState() {
        return this._state;
    },
    _callSubscriber(state: StateProps) {
        console.log('State changed')
    },
    addPost() {
        let newPost = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(message: string) {
        let newMessage = {id: v1(), message: message};
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    subscrube(observer: any) {
        this._callSubscriber = observer;
    }
}










