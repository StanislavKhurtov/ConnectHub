import { connect } from 'react-redux';
import { addMessageAC } from '../../../../Redux/dialogs-reducer';
import {DialogsPageType, StateType, StoreType} from '../../../../Redux/type';
import { Dialogs } from './Dialogs';


type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
};

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void;
};

const mapStateToProps = (state: StateType ): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText));
        },
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
