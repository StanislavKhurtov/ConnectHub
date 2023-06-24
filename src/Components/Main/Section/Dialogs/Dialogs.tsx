import React from 'react';
import dialog from './Dialog.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props:any) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={`${dialog.item} ${dialog.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message =(props:any) => {
    return(
        <div className={dialog.message}>{props.message}</div>
    );
}



export const Dialogs = (props:any) => {
    return (
        <div className={dialog.body}>
            <div className={dialog.items}>
                <DialogItem name="Stanislav" id="1"/>
                <DialogItem name="Egor" id="2"/>
                <DialogItem name="Sofia" id="3"/>
                <DialogItem name="Natalia" id="4"/>
                <DialogItem name="Alexey" id="5"/>
                <DialogItem name="Artur" id="6"/>
            </div>
            <div className={dialog.messages}>

                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="В пизду, дела пиздец"/>
                <Message message="Yo!!!"/>

            </div>
        </div>
    );
};

