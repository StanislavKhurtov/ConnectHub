import React from 'react';
import {ProfileType} from "../../Profile";


type AvatarProps = {
    profile: ProfileType;
};

export const Avatar: React.FC<AvatarProps> = ({ profile }) => {
    return (
        <div>
            <img src={profile.photos.large} alt="logo user" />
            Avatar Desc
        </div>
    );
};
