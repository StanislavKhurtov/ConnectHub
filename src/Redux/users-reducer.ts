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
    followingInProgress: boolean
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
}

type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType
    | setCurrentPageActionCreatorType
    | setUsersTotalCountCreatorType
    |setIsFetchingCreatorType
    |setIsFollowingProgressCreatorType;


const initialState = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false

}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
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
            return {...state,isFetching: action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,followingInProgress: action.isFetching};
        }
        default:
            return state;
    }
}

export const follow = (userId: number): FollowActionCreatorType => {
    return {type: FOLLOW, userId}
}

export const unFollow = (userId: number): UnFollowActionCreatorType => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users: Array<UsersPageType>): setUsersActionCreatorType => {
    return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage: number): setCurrentPageActionCreatorType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (totalCount: number): setUsersTotalCountCreatorType => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount }
}

export const toggleIsFetching = (isFetching: boolean): setIsFetchingCreatorType => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}
export const toggleIsFollowingProgress = (isFetching: boolean): setIsFollowingProgressCreatorType => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching}
}






