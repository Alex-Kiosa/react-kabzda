import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/Rating/UnControlledRating";
import {UnControlledAccordion} from "./components/Accordion/UnContolledAccordion";
import {UnControlledOnOff} from "./components/OnOff/UnControlledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [onValue, setOnValue] = useState(true)
    const [selectValue, setSelectValue] = useState('1')

    return (
        <div className='app-container'>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControlledRating/>
            <Accordion
                titleValue={"Days"}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}
                items={[
                    {value: "1", title: 'Monday'},
                    {value: "3", title: 'Tuesday'},
                    {value: "2", title: 'Wednesday'},
                    {value: "4", title: 'Thursday'},
                    {value: "5", title: 'Friday'}
                ]}
                onClick={() => {
                }}
            />
            {/*<UnControlledAccordion/>*/}
            <OnOff onValue={onValue} onClick={setOnValue}/>
            {/*<UnControlledOnOff onChange={setOnValue} />{onValue.toString()}*/}
            <Select
                items={[
                    {title: "Argentina", value: "1"},
                    {title: "Kazakhstan", value: "2"},
                    {title: "Moldova", value: "3"}
                ]}
                value={selectValue}
                onChange={setSelectValue}
            />
        </div>
    );
}

export default App;
