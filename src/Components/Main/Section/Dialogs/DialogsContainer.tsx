import {connect} from 'react-redux';
import {addMessageAC} from '../../../../Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {Dispatch} from "redux";
import {DialogsPageType} from "../../../../Redux/type";
import {AppRootState} from "../../../../Redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
    isAuth: boolean
};

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText));
        },
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
