import React, {useEffect} from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppRootState, store} from "../../../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../../Redux/profile-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
    isAuth: boolean
}

type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchPropsType;

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType


const ProfileContainer = (props: CommonPropsType) => {
    const dispatch= useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()
    let isAuth = store.getState().auth.isAuth

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        dispatch(getUserProfile(userId))
    }, [])

    if (!isAuth) return <Redirect to={'/login'}/>
    console.log(isAuth)

    return (
        <div className={profile.body}>
            <Profile profile={props.profile}/>
        </div>
    );
}

let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent: any = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchPropsType, CommonPropsType, AppRootState>(mapStateToProps, )(withUrlDataContainerComponent);


//типизация коннекта ох не факт что правильно!!!!!!!