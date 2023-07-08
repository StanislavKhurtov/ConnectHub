import React from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType} from "../../../../index";

type DialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsData.map(el => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })

    let messageElements = props.messagesData.map(el => {
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

