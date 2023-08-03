import React, {useState} from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC} from "../../../../Redux/dialogs-reducer";
import {ActionsTypes, DialogsDataType, MessagesDataType} from "../../../../Redux/type";



type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsType) => {

    let [messageText, setMessageText] = useState('');

    let dialogsElements = props.dialogs.map(el => {
        return (
            <DialogItem key={el.id} name={el.name} id={el.id}/>
        )
    })

    let messageElements = props.messages.map(el => {
        return (
            <Message key={el.id} message={el.message} id={el.id}/>
        );
    })


    let addMessage = () => {
        if (messageText.trim() !== '') {
            props.dispatch(addMessageAC(messageText));
            setMessageText('');
        }
    }

    let onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(event.target.value);
    }

    return (
        <div>
            <div className={dialog.body}>
                <div className={dialog.items}>
                    {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messageElements}
                    <div>
                        <textarea value={messageText} onChange={onMessageChange}/>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};