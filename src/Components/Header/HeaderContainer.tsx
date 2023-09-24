import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getAuthUserData, logout, SetUsersDataAC} from 'Redux/auth-reducer';
import {Header} from './Header';
import {AppRootState} from "Redux/redux-store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null;
};

type MapDispatchToPropsType = {
    SetUsersDataAC: typeof SetUsersDataAC;
    logout: any
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const HeaderContainer = (props: PropsType) => {
    const dispatch = useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, [dispatch])

    return <Header
        isAuth={props.isAuth}
        login={props.login}
        logout={props.logout}
    />;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(
    mapStateToProps,
    {SetUsersDataAC, logout}
)(HeaderContainer);