import React, {Component} from "react";
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {AppRootState} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unFollowAC,
    UsersPageType
} from "../../Redux/users-reducer";

import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    isFetching: boolean;
    toggleIsFetching: (isFetching: boolean) => void;
};


type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
};

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UsersPageType>) => void
    setCurrent: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};

export class UsersAPIComponent extends Component<UserType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        this.requestUsers(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrent(pageNumber);
        this.requestUsers(pageNumber);
        this.props.toggleIsFetching(true)
    };

    requestUsers = (page: number) => {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
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
            </>
        );
    }
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

