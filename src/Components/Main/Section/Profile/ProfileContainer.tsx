import React, {useEffect} from 'react';
import profile from './Profile.module.css'
import {Profile, ProfileType} from "./Profile";
import {connect, useDispatch} from "react-redux";
import {AppRootState, store} from "../../../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from "../../../../Redux/profile-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
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



let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent: any = withRouter(AuthRedirectComponent)

export default connect<MapStateToPropsType, MapDispatchPropsType, CommonPropsType, AppRootState>(mapStateToProps)(withUrlDataContainerComponent);


//типизация коннекта ох не факт что правильно!!!!!!!