import React, {Component} from "react";
import {connect} from 'react-redux';
import {AppRootState} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unFollow,
    UsersPageType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../api/api";

type UserType = {
    users: Array<UsersPageType>;
    follow: (id: number) => void;
    unFollow: (userId: number) => void;
    setUsers: (users: Array<UsersPageType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    isFetching: boolean;
    toggleIsFetching: (isFetching: boolean) => void;
    toggleIsFollowingProgress: (followingInProgress: boolean,taskId:number) => void;
    followingInProgress: number[]
    // Fix: Added the missing prop
};

type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};

export class UsersAPIComponent extends Component<UserType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.requestUsers(this.props.currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.requestUsers(pageNumber);
        this.props.toggleIsFetching(true);
    };

    requestUsers = (page: number) => {
        userAPI.getUsers(page, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    setCurrentPage={this.props.setCurrentPage}
                    setUsers={this.props.setUsers}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress
})(UsersAPIComponent);