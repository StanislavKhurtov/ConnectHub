import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import HeaderContainer from "./Components/Header/HeaderContainer";


export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Main />
            <Footer />
        </div>
    );
}


