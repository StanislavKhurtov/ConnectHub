import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import {DialogsDataType, MessagesDataType, PostType} from "./index";

type AppType = {
    posts: Array<PostType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}

const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Main
                    posts={props.posts}
                    dialogsData={props.dialogsData}
                    messagesData={props.messagesData}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
