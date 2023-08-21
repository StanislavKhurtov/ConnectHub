const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


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

type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType
    | setCurrentPageActionCreatorType
    | setUsersTotalCountCreatorType;


const initialState = {
    items: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
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
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionCreatorType => {
    return {type: FOLLOW, userId}
}

export const unFollowAC = (userId: number): UnFollowActionCreatorType => {
    return {type: UNFOLLOW, userId}
}

export const setUsersAC = (users: Array<UsersPageType>): setUsersActionCreatorType => {
    return {type: SET_USERS, users}
}

export const setCurrentPageAC = (currentPage: number): setCurrentPageActionCreatorType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}

export const setUsersTotalCountAC = (totalCount: number): setUsersTotalCountCreatorType => {
    return {type: SET_TOTAL_COUNT, totalCount: totalCount }
}




