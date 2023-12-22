import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";
import {OnOf} from "./Components/OnOf";

function App() {
    return (
        <div className='app-container'>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <OnOf isOn={true}/>
        </div>
    );
}

export default App;
