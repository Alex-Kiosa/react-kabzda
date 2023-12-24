import React from "react";

type PropsType = {
    title: string
    onClick?: () => void
    setAccordionCollapsed?: () => void
}

export function AccordionTitle(props: PropsType) {
    function onclickHandler() {
        props.onClick && props.onClick()
        props.setAccordionCollapsed && props.setAccordionCollapsed()
    }

    return <h3 onClick={onclickHandler}>{props.title}</h3>
}