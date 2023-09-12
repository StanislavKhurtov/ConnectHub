import {Dispatch} from "redux";
import {authAPI} from "../Components/api/api";


const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
};

export const authReducer = (state = initialState, action: ActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
};

export const SetUsersDataAC = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login},
});

export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(SetUsersDataAC(id, email, login))
            }
        });
}


export type ActionType = ReturnType<typeof SetUsersDataAC>;

export type AuthStateType = typeof initialState;