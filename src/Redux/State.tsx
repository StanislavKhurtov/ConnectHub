import {rerenderEntireTree} from "../render";

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
    profilePage: {
        posts: PostType[]
        newPostText:string
    },
    dialogsPage: {
        dialogs: DialogsDataType[],
        messages: MessagesDataType[]
    }
}

export const state: StateProps = {
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
            {id: 1, name: "Egor"},
            {id: 1, name: "Sofia"},
            {id: 1, name: "Natalia"},
            {id: 1, name: "Alexey"},
            {id: 1, name: "Artur"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra"},
            {id: 3, message: "yo"},
            {id: 4, message: "полный пипец"},
            {id: 5, message: "Hi"},
        ],
    },

}

export const addPost = () => {
    let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export const updatePostText = (newText:string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

const addMessage =() => {
    let newMessage = {id: 6, message: "все получилось!!!"};
    state.dialogsPage.messages.push(newMessage)


}

