import React, {useState} from "react";

export function UnControlledRating() {
    let [value, setValue] = useState(0)

    return (
        <div className="rating">
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}

type PropsTypeStar = {
    selected: boolean
    setValue: () => void
}

function Star(props: PropsTypeStar) {
    const onClickHandler = () => props.setValue()

    return <span className="star" onClick={onClickHandler}>{props.selected ? "★" : "☆"}</span>
}