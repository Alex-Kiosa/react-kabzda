import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type PropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
}

export function Accordion(props: PropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}