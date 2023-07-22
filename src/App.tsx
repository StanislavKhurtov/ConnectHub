import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {StateProps} from "./Redux/State";

type AppType = {
    state: StateProps
    dispatch: any
}

export const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main
                dispatch={props.dispatch}
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
                dialogs={props.state.dialogsPage.dialogs}
                messages={props.state.dialogsPage.messages}
            />
            <Footer/>
        </div>
    );
}


