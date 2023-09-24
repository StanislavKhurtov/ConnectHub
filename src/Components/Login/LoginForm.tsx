import {Field, reduxForm} from "redux-form";
import {Input} from "Components/common/FormsControls/FormsControls";
import {required} from "utils/validator";
import React, {FormEventHandler} from "react";
import s from '../common/FormsControls/FormsControls.module.css'


type LoginFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement>
    error: string

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
                    placeholder='password'
                    component={Input}
                    validate={[required]}
                    name="password"
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={"rememberMe"}
                    type='checkbox'/>Remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
export const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)