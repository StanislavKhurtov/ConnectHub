import { connect } from 'react-redux';
import { addMessageAC } from '../../../../Redux/dialogs-reducer';
import {DialogsPageType,StoreType} from '../../../../Redux/type';
import { Dialogs } from './Dialogs';
import { store } from '../../../../Redux/redux-store';

type MapStateToPropsType = {
    dialogsPage: DialogsPageType;
};

const mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogsPage: store.getState().dialogsPage,
    };
};

type MapDispatchToPropsType = {
    addMessage: (messageText: string) => void;
};

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText));
        },
    };
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
