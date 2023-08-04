import React, {useState} from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC} from "../../../../Redux/dialogs-reducer";
import {store} from "../../../../Redux/redux-store";


export const Dialogs = () => {

    let state = store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    let messageElements = state.messages.map(el => <Message key={el.id} message={el.message} id={el.id}/>)


    let [messageText, setMessageText] = useState('');

    let addMessage = () => {
        if (messageText.trim() !== '') {
           store.dispatch(addMessageAC(messageText));
            setMessageText('');
        }
    }

    let onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessageText(event.target.value);
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            if (messageText.trim() !== '') {
                store.dispatch(addMessageAC(messageText));
                setMessageText('');
            }
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
                    <div>
                        <textarea value={messageText} onKeyPress={onKeyPressHandler} onChange={onMessageChange}/>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};