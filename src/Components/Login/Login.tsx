import React, {FormEventHandler} from 'react';
import {Field, reduxForm} from "redux-form";

type LoginType = {}

export const Login = (props: LoginType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


type LoginFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}
export const LoginForm = (props: LoginFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={"login"}/>
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={"password"}/>
            </div>
            <div>
                <Field component={'input'} name={"rememberMe"} type='checkbox'/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)



