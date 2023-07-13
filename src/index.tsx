import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { BrowserRouter } from "react-router-dom";
import {addMessage, addPost, state, StateProps, subscrube, updatePostText} from "./Redux/State";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
                addMessage={addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscrube(rerenderEntireTree)