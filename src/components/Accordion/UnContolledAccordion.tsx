import React, {useState} from "react";

export function UnControlledAccordion() {
    let [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return <div>
        <AccordionTitle title={"Menu"} onClick={toggleCollapsed} />
        {/*<button onClick={toggleCollapsed}>Toggle</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick?: () => void
    setAccordionCollapsed?: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    function onclickHandler() {
        props.onClick && props.onClick()
        props.setAccordionCollapsed && props.setAccordionCollapsed()
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