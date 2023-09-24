import React, {useEffect} from "react"
import {connect, useDispatch, useSelector} from 'react-redux'
import {AppRootState} from "Redux/redux-store"
import {
    followSuccess,
    getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowingProgress,
    unFollowSuccess,
    UsersPageType
} from "Redux/users-reducer"
import {Users} from "./Users"
import {Preloader} from "../common/Preloader/Preloader";
import {AnyAction} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {WithAuthRedirect} from "hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUser
} from "Redux/users-selectors";

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
    }, [dispatch,props.currentPage, props.pageSize]);


    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(getUsers(pageNumber, props.pageSize));
    };


    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users
                users={users}
                currentPage={props.currentPage}
                pageSize={props.pageSize}
                totalCount={props.totalCount}
                follow={props.follow}
                unFollow={props.unFollow}
                setCurrentPage={setCurrentPage}
                setUsers={setUsers}
                setTotalUsersCount={setTotalUsersCount}
                onPageChanged={onPageChanged}
                followingInProgress={props.followingInProgress}
            />
        </>
    );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

let withRedirect = WithAuthRedirect(UsersAPIComponent)

export const UsersContainer = connect(mapStateToProps, {
    follow: followSuccess,
    unFollow: unFollowSuccess,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(withRedirect);