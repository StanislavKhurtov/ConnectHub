import {connect} from 'react-redux';
import {addMessageAC} from '../../../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {Dispatch} from "redux";
import {DialogsPageType} from "../../../../Redux/type";
import {AppRootState} from "../../../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import React from "react";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
};

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText));
        },
    };
};

let AuthRedirectComponent = WithAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
