import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {AppRootState} from "./Redux/redux-store";
import {ActionsTypes} from "./Redux/type";


type AppType = {
    store: any
    state: AppRootState
    dispatch: (action: ActionsTypes) => void
}

export const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main
                store={props.store}
                dispatch={props.store.dispatch}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
            />
            <Footer/>
        </div>
    );
}


