import {AnyAction} from "redux";
import {getAuthUserData} from "Redux/auth-reducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppRootState} from "Redux/redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED'
const initialState = {
    initialized: false
}


export const appReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED,} as const)

type ActionType = ReturnType<typeof initializedSuccess>

export const initialize = (): ThunkAction<void, AppRootState, unknown, AnyAction> => (dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })

}
