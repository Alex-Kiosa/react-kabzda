import React from "react";

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: PropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed}/>
        {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
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


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
    </ul>
}