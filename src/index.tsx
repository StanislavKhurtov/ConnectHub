import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {StateProps, store} from "./Redux/State";


const rerenderEntireTree = (state: StateProps) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)