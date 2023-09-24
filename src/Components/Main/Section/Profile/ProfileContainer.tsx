import React, {useEffect} from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import {connect, useDispatch, useSelector} from "react-redux";
import {AppRootState, store} from "Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus, updateUserStatus} from "Redux/profile-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {WithAuthRedirect} from "hoc/WithAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: any
    isAuth: boolean

}


type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
    isAuth: boolean
}

type ProfileAPIContainerPropsType = MapStateToPropsType & MapDispatchPropsType;

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileAPIContainerPropsType


const ProfileContainer = (props: CommonPropsType) => {
    const dispatch = useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()
    let isAuth = store.getState().auth.isAuth
    let status = useSelector<AppRootState, string>((state) => state.profilePage.status)

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId as string
        }
        dispatch(getUserProfile(userId))
        dispatch(getUserStatus(userId))
    }, [])

    const onChange = (status: string) => {
        dispatch(updateUserStatus(status))
    }

    return (
        <div className={profile.body}>
            <Profile profile={props.profile} status={status} onChange={onChange}/>
        </div>
    );
}


let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

});

let withUrlDataContainerComponent: any = withRouter(AuthRedirectComponent)

export default connect<MapStateToPropsType, MapDispatchPropsType, CommonPropsType, AppRootState>(mapStateToProps,)(withUrlDataContainerComponent);


