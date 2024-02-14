import React, {useState, KeyboardEvent, useEffect} from "react";
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredItemValue)

    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const omFocusHandler = () => {
    }
    const onBlurHandler = () => setActive(!active)
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredItemValue) {
                    const element = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (element) {
                        props.onChange(element.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }
    }
    const onClickItem = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <div className={style.select}
             tabIndex={1}
             onBlur={onBlurHandler}
             onFocus={omFocusHandler}
             onKeyDown={onKeyDownHandler}>
            <span
                onClick={toggleItems}
                className={active ? style.value + " " + style.active : style.value}>
                {selectedItem && selectedItem.title}
                <svg viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"></path>
                </svg>
            </span>
            {active &&
                <ul className={style.items}>
                    {props.items.map((i, index) => <li
                        onMouseEnter={() => setHoveredItemValue(i.value)}
                        key={index}
                        onClick={() => onClickItem(i.value)}
                        className={hoveredItem === i ? style.item + " " + style.selected : style.item}
                    >{i.title}
                    </li>)}
                </ul>
            }
        </div>
    )
}