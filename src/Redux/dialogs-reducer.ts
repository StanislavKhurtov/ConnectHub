import {v1} from "uuid";
import {ActionsTypes, AddMessageActionType, DialogsPageType} from "./type";


const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
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
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {id: v1(), message: action.message};
            return {...state, messages: [...state.messages, newMessage]};
        }
        default:
            return state;
    }
}

export const addMessageAC = (message: string): AddMessageActionType => {
    return {type: ADD_MESSAGE, message}
}