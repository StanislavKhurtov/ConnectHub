import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateProps} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state:StateProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root'
        )
    );
}

