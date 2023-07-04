import React from 'react';
import dialog from './../Dialog.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={`${dialog.item} ${dialog.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}





