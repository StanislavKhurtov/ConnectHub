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

    let dialogsData = [
        {id:1, name: "Stanislav"},
        {id:1, name: "Egor"},
        {id:1, name: "Sofia"},
        {id:1, name: "Natalia"},
        {id:1, name: "Alexey"},
        {id:1, name: "Artur"},
    ]

    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "How is your it-kamasutra"},
        {id:3, message: "yo"},
        {id:4, message: "полный пипец"},
        {id:5, message: "Hi"},
    ]


    return (
        <div className={dialog.body}>
            <div className={dialog.items}>
                {dialogsData.map( el => {return(
                    <DialogItem name={el.name} id={el.id}/>
                )})}
            </div>
            <div className={dialog.messages}>
                {messagesData.map(el=>{
                    return(
                        <Message message={el.message} id={el.id}/>
                    );
                })}
            </div>
        </div>
    );
};

