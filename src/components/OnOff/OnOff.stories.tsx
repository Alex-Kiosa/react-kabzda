import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {OnOff} from '../OnOff/OnOff';
import '../../App.css';

export default {
    component: OnOff,
};

const callback = action('on or off clicked')

export const OnMode = () => <OnOff onValue={true} onClick={callback}/>
export const OffMode = () => <OnOff onValue={false} onClick={callback}/>
export const ChangeMode = () => {
    const [value, setValue] = useState(true)
    return <OnOff onValue={value} onClick={setValue}/>
}

