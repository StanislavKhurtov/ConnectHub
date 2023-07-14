import React from 'react';


type MessageType = {
    id: string
    message: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={props.message}>{props.message}</div>
    );
}



