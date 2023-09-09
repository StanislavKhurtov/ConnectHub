import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {SetUsersDataAC} from '../../Redux/auth-reducer';
import {Header} from './Header';
import {AppRootState} from "../../Redux/redux-store";
import axios from "axios";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null;
};

type MapDispatchToPropsType = {
    SetUsersDataAC: typeof SetUsersDataAC;
};

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const HeaderContainer = (props: PropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    props.SetUsersDataAC(id, email, login)
                }
            });
    }, [])

    return <Header
        isAuth={props.isAuth}
        login={props.login}
    />;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootState>(
    mapStateToProps,
    {SetUsersDataAC}
)(HeaderContainer);