import React, {FormEventHandler} from 'react';
import dialog from './Dialog.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {store} from "../../../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

type DialogsPropsType = {
    sendMessage: (newMessageBody: any) => void;
}

export const Dialogs = (props:DialogsPropsType) => {

    let isAuth = store.getState().auth.isAuth

    let state = store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    let messageElements = state.messages.map(el => <Message key={el.id} message={el.message} id={el.id}/>)


    let addNewMessage = (values: any) => {
      props.sendMessage(values.newMessageBody)
    }

    if (!isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <div className={dialog.body}>
                <div className={dialog.items}>
                    {dialogsElements}
                </div>
                <div className={dialog.messages}>
                    {messageElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


type AddMessageFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const AddMessageForm = (props: AddMessageFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newMessageBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)