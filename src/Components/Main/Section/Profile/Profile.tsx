import React from 'react';
import { MyPostsContainer } from './Section/MyPosts/MyPostsContainer';
import { ProfileInfo } from './Section/ProfileInfo/ProfileInfo';

export interface ProfileType {
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
};

export const Profile: React.FC<ProfileProps> = ({ profile }) => {
    return (
        <div >
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
};