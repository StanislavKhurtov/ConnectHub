import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Main} from "./Components/Main";
import {Footer} from "./Components/Footer";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
