import React, {Component} from "react";
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

import axios from "axios";
import {Users} from "./Users";

type UserType = {
    users: Array<UsersPageType>;
    follow: (id: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: Array<UsersPageType>) => void;
    setCurrent: (currentPage: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    pageSize: number;
    totalCount: number;
    currentPage: number;
};


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

export class UsersAPIComponent extends Component<UserType> {
    componentDidMount() {
        this.requestUsers(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrent(pageNumber);
        this.requestUsers(pageNumber);
    };

    requestUsers = (page: number) => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    render() {
        return (
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                setCurrent={this.props.setCurrent}
                setUsers={this.props.setUsers}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageChanged={this.onPageChanged}
            />
        );
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

