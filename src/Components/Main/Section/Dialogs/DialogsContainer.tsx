import {connect} from 'react-redux';
import {sendMessageCreator} from 'Redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {Dispatch} from "redux";
import {DialogsPageType} from "Redux/type";
import {AppRootState} from "Redux/redux-store";
import {WithAuthRedirect} from "hoc/WithAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
};

type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: any) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: any) => {
            dispatch(sendMessageCreator(newMessageBody));
        }

    };
};

let AuthRedirectComponent = WithAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer