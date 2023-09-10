import React from 'react';
import {ProfileType} from "../../Profile";
import user from './Avatar.module.css'
import userPhoto from "../../../../../../assets/images/1.jpg";


type AvatarProps = {
    profile: ProfileType;
};

export const Avatar: React.FC<AvatarProps> = ({ profile }) => {
    return (
        <div>
            <img className={user.image}  src={profile.photos.large !== null ? profile.photos.small : userPhoto} alt="logo user" />
            <div>{profile.fullName}</div>
            <div>{profile.aboutMe}</div>

        </div>
    );
};
