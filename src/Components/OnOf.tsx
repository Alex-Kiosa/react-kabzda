import React from "react";

type PropsType = {
    isOn: boolean
}

export function OnOf(props: PropsType) {
    return <div className={"checkboxes-wrap"}>
        <div className="checkboxes">
            <span className={`checkbox ${props.isOn && 'checkbox_on'}`}>On</span>
            <span className={`checkbox ${!props.isOn && 'checkbox_off'}`} >Off</span>
        </div>
        <div className={`indicator ${props.isOn ? 'indicator_on' : 'indicator_off'}`}></div>
    </div>
}