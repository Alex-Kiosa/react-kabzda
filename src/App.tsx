import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";

function App() {
    return (
        <div className='app-container'>
            <Rating/>
            <Accordion/>
        </div>
    );
}

export default App;
