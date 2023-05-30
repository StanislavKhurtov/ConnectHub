import React from 'react';
import './App.css';
import {Technologies} from "./Component/Technologies";
import {Header} from "./Component/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

export default App;
