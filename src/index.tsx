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
                state={state}
                addPost={store.addPost.bind(store)}
                updatePostText={store.updatePostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscrube(rerenderEntireTree)