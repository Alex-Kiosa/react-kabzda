import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledAccordion} from "./components/Accordion/UnContolledAccordion";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState(false)
    let [onValue, setOnValue] = useState(true)

    return (
        <div className='app-container'>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>
            <Accordion titleValue={"Users"} collapsed={accordionCollapsed} setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>
            <UnControlledAccordion/>
            {/*<OnOff onValue={onValue} onClick={setOnValue}/>*/}
            <UnControlledOnOff onChange={setOnValue} />{onValue.toString()}
        </div>
    );
}

export default App;
