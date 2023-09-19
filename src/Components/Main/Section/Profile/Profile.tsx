import React from 'react';
import { MyPostsContainer } from './Section/MyPosts/MyPostsContainer';
import { ProfileInfo } from './Section/ProfileInfo/ProfileInfo';
import {ProfileStatus} from "./Section/ProfileInfo/ProfileStatus";

export type ProfileType= {
    aboutMe: string;
    contacts: {
        facebook: string | null;
        website: string | null;
        vk: string | null;
        twitter: string | null;
        instagram: string | null;
        youtube: string | null;
        github: string | null;
        mainLink: string | null;
    };
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: {
        small: string;
        large: string;
    };
}

export type ProfileProps = {
    profile: ProfileType | null;
    status: string
    onChange: (newValue: string) => void
};

export const Profile: React.FC<ProfileProps> = ({ profile, status, onChange }) => {
    return (
        <div >
            <ProfileInfo profile={profile} />
            <ProfileStatus status={status} onChange={onChange}/>
            <MyPostsContainer />
        </div>
    );
};