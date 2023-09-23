import React from 'react';
import {EditebleSpan} from "Components/EditableSpan/EditableSpan";

type ProfileStatusType = {
    status: string
    onChange: (newValue: string) => void
}
export const ProfileStatus = (props: ProfileStatusType) => {

    return (
        <div>
            <EditebleSpan title={props.status} onChange={props.onChange}/>
        </div>
    );
};

