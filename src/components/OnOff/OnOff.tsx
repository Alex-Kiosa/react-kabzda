import React, {useState} from "react";

type PropsType = {
    onValue: boolean
    onClick: (onValue: boolean) => void
}

export function OnOff(props: PropsType) {
    // console.log("OnOff rendering")

    const onClickHandler = () => {
        props.onClick(!props.onValue)
    }

    return <div className="checkboxes-wrap">
        <div className="checkboxes">
            <div className={`checkbox ${props.onValue && 'checkbox_on'}`} onClick={onClickHandler}>On
            </div>
            <div className={`checkbox ${!props.onValue && 'checkbox_off'}`} onClick={onClickHandler}>Off
            </div>
        </div>
        <div className={`indicator ${props.onValue ? 'indicator_on' : 'indicator_off'}`}></div>
    </div>
}