import React from "react";

type PropsType = {
    onValue: boolean
    onClick: (onValue: boolean) => void
}

export function OnOff(props: PropsType) {

    return <div className="checkboxes-wrap">
        <div className="checkboxes">
            <div className={`checkbox ${props.onValue && 'checkbox_on'}`} onClick={() => props.onClick(false)}>On
            </div>
            <div className={`checkbox ${!props.onValue && 'checkbox_off'}`} onClick={() => props.onClick(true)}>Off
            </div>
        </div>
        <div className={`indicator ${props.onValue ? 'indicator_on' : 'indicator_off'}`}></div>
    </div>
}