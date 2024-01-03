import React from "react";

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

type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    function onclickHandler() {
        props.setAccordionCollapsed()
    }

    return <h3 onClick={onclickHandler}>{props.title}</h3>
}


function AccordionBody() {
    return <ul>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
    </ul>
}