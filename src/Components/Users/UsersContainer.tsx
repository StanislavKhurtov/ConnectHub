import React, {useEffect} from "react"
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppRootState} from "../../Redux/redux-store"
import {
    follow,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowingProgress,
    unFollow,
    UsersPageType
} from "../../Redux/users-reducer"
import {Users} from "./Users"
import {Preloader} from "../common/Preloader/Preloader";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";

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
    toggleIsFollowingProgress: (followingInProgress: boolean, taskId: number) => void;
    followingInProgress: number[];
};

type MapStateToPropsType = {
    users: Array<UsersPageType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};

const UsersAPIComponent = (props: UserType) => {
    const users = useSelector<AppRootState,any>((state)=> state.usersPage.items)
    const dispatch = useDispatch<ThunkDispatch<AppRootState, any, AnyAction>>()

    useEffect(() => {
        dispatch(getUsers(props.currentPage, props.pageSize));
    }, []);


    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsers(pageNumber, props.pageSize));
        props.setCurrentPage(pageNumber);

    };


    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users
                users={users}
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                totalCount={props.totalCount}
                follow={follow}
                unFollow={unFollow}
                setCurrentPage={setCurrentPage}
                setUsers={setUsers}
                setTotalUsersCount={setTotalUsersCount}
                onPageChanged={onPageChanged}
                followingInProgress={props.followingInProgress}
                toggleIsFollowingProgress={toggleIsFollowingProgress}
            />
        </>
    );
};

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
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersAPIComponent);