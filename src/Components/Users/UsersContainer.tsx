import React from "react";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { AppRootState } from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC,
    UsersPageType
} from "../../Redux/users-reducer";
import {UsersC} from "./UsersС";

type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalCount: number
    currentPage: number
};

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
    setCurrent: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrent: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) =>{
            dispatch(setUsersTotalCountAC(totalCount))
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

