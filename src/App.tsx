import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating";
import {Accordion} from "./Components/Accordion";
import {OnOff} from "./Components/OnOff";
import {UnControlledRating} from "./Components/UnControlledRating";
import {UnControlledAccordion} from "./Components/UnContolledAccordion";
import {UnControlledOnOff} from "./Components/UnControlledOnOff";

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
