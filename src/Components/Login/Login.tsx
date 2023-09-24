import React from 'react';
import {LoginReduxForm} from "Components/Login/LoginForm";
import {connect, useDispatch} from "react-redux";
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

    const dispatch: ThunkDispatch<AppRootState, unknown, AnyAction>  = useDispatch()
    const onSubmit = (formData: any) => {
      dispatch(login(formData.email, formData.password, formData.rememberMe))
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppRootState) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)

