import {v1} from "uuid";
import {ActionsTypes, AddMessageActionType, DialogsPageType} from "./type";


const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = { id: v1(), message: action.message };
            return { ...state, messages: [...state.messages, newMessage] };
        }
        default:
            return state;
    }
}

export const addMessageAC = (message: string): AddMessageActionType => {
    return {type: ADD_MESSAGE, message}
}