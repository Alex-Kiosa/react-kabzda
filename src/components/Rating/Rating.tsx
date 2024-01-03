import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type PropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function Rating(props: PropsType) {
    return (
        <div className="rating">
            <Star selected={props.value >= 1} onClick={props.onClick} value={1}/>
            <Star selected={props.value >= 2} onClick={props.onClick} value={2}/>
            <Star selected={props.value >= 3} onClick={props.onClick} value={2}/>
            <Star selected={props.value >= 4} onClick={props.onClick} value={4}/>
            <Star selected={props.value >= 5} onClick={props.onClick} value={5}/>
        </div>
    )
}

type PropsTypeStar = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: PropsTypeStar) {
    const onClickHandler = () => props.onClick(props.value)

    return <span className="star" onClick={onClickHandler}>{props.selected ? "★" : "☆"}</span>
}