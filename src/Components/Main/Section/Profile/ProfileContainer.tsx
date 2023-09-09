import React, {useEffect} from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../../Redux/profile-reducer";
import {AppRootState} from "../../../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {StateType} from "../../../../Redux/type";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchPropsType;

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType


const ProfileContainer = (props: CommonPropsType) => {

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        ).then((response) => {
            props.setUserProfile(response.data);
        });
    }, [])

    return (
        <div className={profile.body}>
            <Profile profile={props.profile}/>
        </div>
    );
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
});

let withUrlDataContainerComponent: any = withRouter(ProfileContainer)

export default connect<MapStateToPropsType,MapDispatchPropsType,CommonPropsType,AppRootState>(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);


//типизация коннекта ох не факт что правильно!!!!!!!