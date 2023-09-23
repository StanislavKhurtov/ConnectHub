import {v1} from "uuid";
import {DialogsDataType, MessagesDataType} from "./type";


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
        case 'SEND_MESSAGE':
            return {
                    ...state,
                    messages: [...state.messages, {id: '6', message: action.newMessageBody}]
                }

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: any) => ({type: 'SEND_MESSAGE', newMessageBody} as const)

export type SendMessagecreatorType = ReturnType<typeof sendMessageCreator>

type ActionsTypes = SendMessagecreatorType