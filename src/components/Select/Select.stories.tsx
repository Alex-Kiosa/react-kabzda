import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";

export default {
    component: Select
};

export const SelectAction = () => {
    const [value, setValue] = useState<string>('Choose option')
    const onChange = (newValue: string) => {
        setValue(newValue)
    }

    return <Select
        options={[
            {title: "option 1", value: 1},
            {title: "option 2", value: 2},
            {title: "option 3", value: 3},
        ]}
        onChange={onChange}
        value={value}
    />
}
