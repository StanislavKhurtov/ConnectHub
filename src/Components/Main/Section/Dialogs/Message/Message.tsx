import React from 'react';


type MessageType = {
    id:number
    message:string
}

export const Message =(props:MessageType) => {
    return(
        <div className={props.message}>{props.message}</div>
    );
}



