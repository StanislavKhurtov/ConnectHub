import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";


export const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}


