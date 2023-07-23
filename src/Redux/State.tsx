import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionsTypes, StateType, StoreType} from "./type";





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

    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}















