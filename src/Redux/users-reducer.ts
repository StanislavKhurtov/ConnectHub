

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type LocationType = {
    city: string
    country: string
}

export type UsersPageType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type UsersStateType = {
    [key: string]: Array<UsersPageType>
}


type FollowActionCreatorType = {
    type: 'FOLLOW'
    userId: string
}
type UnFollowActionCreatorType = {
    type: 'UNFOLLOW'
    userId: string
}
type setUsersActionCreatorType = {
    type: 'SET_USERS'
    users: Array<UsersPageType>
}

type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType;



const initialState = {
    users: []
}


export const usersReducer = (state: UsersStateType=initialState, action: ActionType): UsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case UNFOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
            case SET_USERS: {
                return {...state, users: [...state.users,...action.users ]}
            }
        default:
            return state;
    }
}


export const followAC = (userId: string): FollowActionCreatorType => {
    return {type: FOLLOW, userId,}
}

export const unFollowAC = (userId: string): UnFollowActionCreatorType => {
    return {type: UNFOLLOW, userId,}
}

export const setUsersAC = (users: Array<UsersPageType>): setUsersActionCreatorType => {
    return {type: SET_USERS, users}
}


