import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion
};

// Legacy syntax for usage
const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true} setAccordionCollapsed={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false} setAccordionCollapsed={() => {
    }}/>
}

export const AccordionAction = () => {
    const [collapsed, setCollapsed] = useState(true)

    return <Accordion titleValue={'Accordion Action'} collapsed={collapsed} setAccordionCollapsed={() => setCollapsed(!collapsed)}/>
}


/*
// Advanced syntax for usage
type Story = StoryObj<typeof Accordion>;

export const FirstStory: Story = {
    // args - this is the props of our component
    args: {
        titleValue: 'Collapsed',
        collapsed: true,
        setAccordionCollapsed: () => {}
    },
}*/
