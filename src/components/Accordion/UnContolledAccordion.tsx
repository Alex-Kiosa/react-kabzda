import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

export function UnControlledAccordion() {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const toggleCollapsed = () => {
        // setCollapsed(!collapsed)
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return <div>
        <AccordionTitle title={"Menu"} onClick={toggleCollapsed} />

        {!state.collapsed && <AccordionBody/>}
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
