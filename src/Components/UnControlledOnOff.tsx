import React, {useState} from "react";

type PropsType = {
    onChange: (value: boolean) => void
}

export function UnControlledOnOff(props: PropsType) {
    // console.log("OnOff rendering")
    let [on, setOn] = useState(false)
    const onClickHandler = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClickHandler = () => {
        setOn(false)
        props.onChange(false)
    }

    return <div className="checkboxes-wrap">
        <div className="checkboxes">
            <div className={`checkbox ${on && 'checkbox_on'}`} onClick={onClickHandler}>On
            </div>
            <div className={`checkbox ${!on && 'checkbox_off'}`} onClick={offClickHandler}>Off
            </div>
        </div>
        <div className={`indicator ${on ? 'indicator_on' : 'indicator_off'}`}></div>
    </div>
}