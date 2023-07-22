import React, {RefObject} from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessagesDataType,addMessageActionCreator} from "../../../../Redux/State";


type DialogsType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    dispatch:any
}

export const Dialogs = (props: DialogsType) => {

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

    let messageRef: RefObject<HTMLTextAreaElement> = React.createRef();


    let addMessage = () => {
        let textMessage = messageRef.current?.value;
        if (textMessage) {
            props.dispatch(addMessageActionCreator(textMessage));
        }
    }


    return (
        <div>
            <div className={dialog.body}>
                <div className={dialog.items}>
                    {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messageElements}
                </div>
            </div>
            <div>
                <textarea ref={messageRef}/>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

