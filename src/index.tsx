import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { BrowserRouter } from "react-router-dom";
import {StateProps, store} from "./Redux/State";


const rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost}
                updatePostText={store.updatePostText}
                addMessage={store.addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscrube(rerenderEntireTree)