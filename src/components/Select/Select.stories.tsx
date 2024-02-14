import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    component: Select
};

export const WithValue = () => {
    const [value, setValue] = useState('1')

    return <Select
        items={[
            {title: "option 1", value: "1"},
            {title: "option 2", value: "2"},
            {title: "option 3", value: "3"},
        ]}
        value={value}
        onChange={setValue}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <Select
        items={[
            {title: "option 1", value: "1"},
            {title: "option 2", value: "2"},
            {title: "option 3", value: "3"},
        ]}
        onChange={setValue}
        value={value}
    />
}
