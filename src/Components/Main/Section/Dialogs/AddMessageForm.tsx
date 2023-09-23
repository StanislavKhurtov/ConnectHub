import React, {FormEventHandler} from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "Components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "utils/validator";

type AddMessageFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props: AddMessageFormType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name='newMessageBody'
                    placeholder='Enter your message'
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)