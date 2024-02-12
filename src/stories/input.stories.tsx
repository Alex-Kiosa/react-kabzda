import React, {ChangeEvent, useRef, useState} from 'react'

export default {
    title: "input",
    // component: input
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div>
        <input onChange={onChange}/> - {value}
    </div>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        if (el) {
            setValue(el.value)
        }
    }

    return <div>
        <input ref={inputRef} id={'inputId'}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </div>
}

export const ControlledInputWithFixedValue = () => <input value={"str"}/>
