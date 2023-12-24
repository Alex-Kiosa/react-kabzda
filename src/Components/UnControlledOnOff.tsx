import React, {useState} from "react";

type PropsType = {}

export function UnControlledOnOff(props: PropsType) {
    // console.log("OnOff rendering")
    let [on, setOn] = useState(false)

    return <div className="checkboxes-wrap">
        <div className="checkboxes">
            <div className={`checkbox ${on && 'checkbox_on'}`} onClick={
                () => setOn(true)
            }>On
            </div>
            <div className={`checkbox ${!on && 'checkbox_off'}`} onClick={
                () => setOn(false)
            }>Off
            </div>
        </div>
        <div className={`indicator ${on ? 'indicator_on' : 'indicator_off'}`}></div>
    </div>
}