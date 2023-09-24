import {Field, reduxForm} from "redux-form";
import {Input} from "Components/common/FormsControls/FormsControls";
import {required} from "utils/validator";
import React, {FormEventHandler} from "react";


type LoginFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement>
}
export const LoginForm = (props: LoginFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'email'}
                    component={Input}
                    name={'email'}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'password'}
                    component={Input}
                    validate={[required]}
                    name={"password"}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type='checkbox'/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)