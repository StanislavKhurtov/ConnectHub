import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateProps, updatePostText} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state:StateProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
                addMessage={addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root'
        )
    );
}

