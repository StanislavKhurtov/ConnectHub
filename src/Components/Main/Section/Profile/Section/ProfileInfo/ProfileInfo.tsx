import React from "react";
import {Avatar} from "../Avatar/Avatar";
import {Preloader} from "Components/common/Preloader/Preloader";
import {ProfileType} from "../../Profile";


type ProfileInfoProps = {
    profile: ProfileType | null;
};

export const ProfileInfo: React.FC<ProfileInfoProps> = ({profile}) => {
    if (!profile) {
        return <Preloader/>;
    }

    return (
        <>
            {/*<Image/>*/}
            <Avatar profile={profile}/>
        </>
    );
};