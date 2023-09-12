import React, {useEffect} from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppRootState} from "../../../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../../Redux/profile-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";


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
    const dispatch= useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        dispatch(getUserProfile(userId))
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

export default connect<MapStateToPropsType, MapDispatchPropsType, CommonPropsType, AppRootState>(mapStateToProps, )(withUrlDataContainerComponent);


//типизация коннекта ох не факт что правильно!!!!!!!