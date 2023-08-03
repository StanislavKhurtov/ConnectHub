import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {StateType} from "./Redux/type";


type AppType = {
    state: StateType
    store: any
    dispatch: any
}

export const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main
               store={props.store}
               dispatch={props.dispatch}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
            />
            <Footer/>
        </div>
    );
}


