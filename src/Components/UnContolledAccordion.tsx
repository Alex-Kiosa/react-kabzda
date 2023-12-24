import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export function UnControlledAccordion(props: { titleValue: string}) {
    let [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={props.titleValue} onClick={toggleCollapsed} />
        {/*<button onClick={toggleCollapsed}>Toggle</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}