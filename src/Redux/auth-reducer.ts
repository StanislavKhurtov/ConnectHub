import {AnyAction, Dispatch} from "redux";
import {authAPI} from "Components/api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootState} from "Redux/redux-store";
import {stopSubmit} from "redux-form";


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
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export const SetUsersDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
});

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(SetUsersDataAC(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppRootState, unknown, AnyAction> => (dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
                dispatch(stopSubmit('login',{_error: message}))
            }
        });
}

export const logout = (): ThunkAction<void, AppRootState, unknown, AnyAction> => (dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(SetUsersDataAC(null, null, null, false))
            }
        });
}


export type ActionType = ReturnType<typeof SetUsersDataAC>;

export type AuthStateType = typeof initialState;