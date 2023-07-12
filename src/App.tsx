import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {StateProps} from "./Redux/State";

type AppType = {
    state: StateProps
    addPost:(postMessage: string) =>void
}

const App = (props: AppType) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Main
                    addPost={props.addPost}
                    posts={props.state.profilePage.posts}
                    dialogs={props.state.dialogsPage.dialogs}
                    messages={props.state.dialogsPage.messages}/>
                <Footer/>
            </div>
    );
}

export default App;
