import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {StateProps} from "./Redux/State";

type AppType = {
    state: StateProps
    addPost:() =>void
    updatePostText:(newText:string)=> void
    addMessage:(message:string)=>void
}

const App = (props: AppType) => {

    return (
            <div className="app-wrapper">
                <Header/>
                <Main
                    addPost={props.addPost}
                    posts={props.state.profilePage.posts}
                    newPostText={props.state.profilePage.newPostText}
                    updatePostText={props.updatePostText}
                    dialogs={props.state.dialogsPage.dialogs}
                    messages={props.state.dialogsPage.messages}
                    addMessage={props.addMessage}
                />
                <Footer/>
            </div>
    );
}

export default App;
