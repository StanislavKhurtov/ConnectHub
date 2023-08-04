import {v1} from "uuid";
import {ActionsTypes, AddMessageActionType, DialogsDataType, DialogsPageType, MessagesDataType} from "./type";


const ADD_MESSAGE = 'ADD-MESSAGE';


const initialState = {
    dialogs: [
        {id: v1(), name: "Stanislav"},
        {id: v1(), name: "Egor"},
        {id: v1(), name: "Sofia"},
        {id: v1(), name: "Natalia"},
        {id: v1(), name: "Alexey"},
        {id: v1(), name: "Artur"},
    ] as DialogsDataType[],
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "How is your it-kamasutra"},
        {id: v1(), message: "yo"},
        {id: v1(), message: "полный пипец"},
        {id: v1(), message: "Hi"},
    ] as MessagesDataType[],
}
export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {...state, messages: [...state.messages, {id: v1(), message: action.message}]};
        }
        default:
            return state;
    }
}

export const addMessageAC = (message: string): AddMessageActionType => {
    return {type: ADD_MESSAGE, message}
}