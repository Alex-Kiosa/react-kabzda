import React from "react";

type PropsType = {
    selected: boolean
}

export function Star(props: PropsType) {
    return <span>{props.selected? "★" : "☆"}</span>
}