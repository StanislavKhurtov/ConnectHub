const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type LocationType = {
    city: string
    country: string
}

export interface Photo {
    small: string | null;
    large: string | null;
}

export type UsersPageType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: Photo;
    status: string | null;
    followed: boolean;
}

export type UsersStateType = {
    items: UsersPageType[];
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

type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType;


const initialState = {
    items: [],

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
            return {...state, items: [...state.items, ...action.users]}
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


