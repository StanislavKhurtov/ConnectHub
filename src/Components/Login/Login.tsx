import React from 'react';
import {LoginReduxForm} from "Components/Login/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {AppRootState} from "Redux/redux-store";
import {login} from "Redux/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void;
    isAuth: boolean
}
export const Login = (props: LoginType) => {

    const isAuth = useSelector((state: AppRootState) => state.auth.isAuth);
    const dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>  = useDispatch()
    const onSubmit = (formData: any) => {
      dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




