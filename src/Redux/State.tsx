export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
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
                {id: 1, message: "Hi", likesCount: 15},
                {id: 2, message: "How is your it-kamasutra", likesCount: 14},
                {id: 3, message: "yo", likesCount: 9},
                {id: 4, message: "полный пипец", likesCount: 10},
                {id: 5, message: "Hi", likesCount: 25},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Stanislav"},
                {id: 2, name: "Egor"},
                {id: 3, name: "Sofia"},
                {id: 4, name: "Natalia"},
                {id: 5, name: "Alexey"},
                {id: 6, name: "Artur"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "yo"},
                {id: 4, message: "полный пипец"},
                {id: 5, message: "Hi"},
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
        let newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(message: string) {
        let newMessage = {id: 6, message: message};
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
    },
    subscrube(observer: any) {
        this._callSubscriber = observer;
    }
}










