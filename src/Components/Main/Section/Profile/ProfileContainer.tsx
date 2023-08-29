import React from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile} from "../../../../Redux/profile-reducer";
import { AppRootState } from "../../../../Redux/redux-store";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchPropsType;

class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        ).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <div className={profile.body}>
                <Profile profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIContainer);