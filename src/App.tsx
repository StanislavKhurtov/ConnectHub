import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {StateProps} from "./Redux/State";

type AppType = {
    state: StateProps
}

const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main
                    posts={props.state.profilePage.posts}
                    dialogs={props.state.dialogsPage.dialogs}
                    messages={props.state.dialogsPage.messages}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
