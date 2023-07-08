import React from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../../../Redux/State";


type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogs.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })

    let messageElements = props.messages.map(el => {
        return (
            <Message message={el.message} id={el.id}/>
        );
    })

    return (
        <div className={dialog.body}>
            <div className={dialog.items}>
                {dialogsElements}
            </div>
            <div className={dialog.messages}>
                {messageElements}
            </div>
        </div>
    );
};

