import React from "react";
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {Users} from "./Users";
import {AppRootState} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersPageType} from "../../Redux/users-reducer";


type MapStateToPropsType = {
    users: Array<UsersPageType>
};

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<UsersPageType>) => void
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersPageType>) => {
            dispatch(setUsersAC(users))
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);