import {Dispatch} from "redux";
import {userAPI} from "../Components/api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


export type LocationType = {
    city: string
    country: string
}

export interface Photo {
    small: string | null
    large: string | null
}

export type UsersPageType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: Photo
    status: string | null
    followed: boolean
}

export type UsersStateType = {
    items: UsersPageType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type FollowActionCreatorType = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowActionCreatorType = {
    type: 'UNFOLLOW'
    userId: number
}
type setUsersActionCreatorType = {
    type: 'SET_USERS'
    users: Array<UsersPageType>
}

type setCurrentPageActionCreatorType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type setUsersTotalCountCreatorType = {
    type: 'SET_TOTAL_COUNT',
    totalCount: number
}
type setIsFetchingCreatorType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}
type setIsFollowingProgressCreatorType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching: boolean
    userId: number
}

type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType
    | setCurrentPageActionCreatorType
    | setUsersTotalCountCreatorType
    | setIsFetchingCreatorType
    | setIsFollowingProgressCreatorType;


const initialState = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {
                ...state,
                items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)
            }
        }
        case SET_USERS: {
            return {...state, items: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        default:
            return state;
    }
}

export const followSuccess = (userId: number): FollowActionCreatorType => ({type: FOLLOW, userId} as const)
export const unFollowSuccess = (userId: number): UnFollowActionCreatorType => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UsersPageType>): setUsersActionCreatorType => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number): setCurrentPageActionCreatorType => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setTotalUsersCount = (totalCount: number): setUsersTotalCountCreatorType => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean): setIsFetchingCreatorType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): setIsFollowingProgressCreatorType =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    };
};

export const followUser = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        userAPI.followUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};

export const unfollowUser = (userId: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        userAPI.unfollowUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowSuccess(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId));
        });
    };
};



