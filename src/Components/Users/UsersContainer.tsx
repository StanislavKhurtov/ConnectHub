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
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.items
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersPageType>) => {
            dispatch(setUsersAC(users))
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);