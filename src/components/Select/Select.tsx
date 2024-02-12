import React, {useState} from "react";
import style from './Select.module.css'

type OptionType = {
    title: string
    value: number
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    options: OptionType[]
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    const onClickHandler = () => setCollapsed(!collapsed)
    const onBlurHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={style.select} tabIndex={1} onBlur={onBlurHandler}>
            <span onClick={onClickHandler} className={collapsed ? style.selectValue: style.selectValue + " " + style.selectCollapsed}>
                {props.value}
                <svg viewBox="0 0 24 24" >
                    <path d="M7 10l5 5 5-5z"></path>
                </svg>
            </span>
            {!collapsed && <SelectOptions options={props.options} onChange={props.onChange}/>}
        </div>
    )
}

type SelectOptionsPropsType = {
    onChange: (value: any) => void
    options: OptionType[]
}

function SelectOptions(props: SelectOptionsPropsType) {
    const onClickHandler = (e: any) => props.onChange(e.currentTarget.innerText)

    return <ul className={style.selectOptions}>
        {props.options.map((o, index) => <li key={index} onClick={onClickHandler}>{o.title}</li>)}
    </ul>
}