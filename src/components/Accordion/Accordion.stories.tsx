import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    component: Accordion
};

// Legacy syntax for usage
const onChangeHandler = action('changed accordion collapse mode')
const onClickHandler = action('some item was clicked')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={'Collapsed Accordion'}
        collapsed={true}
        setAccordionCollapsed={onChangeHandler}
        items={[
            {title: 'item 1', value: 1},
            {title: 'item 2', value: 2},
            {title: 'item 3', value: 3}
        ]}
        onClick={onClickHandler}
    />
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={'Opened Accordion'}
        collapsed={false}
        setAccordionCollapsed={() => {
        }}
        items={[
            {title: 'item 1', value: 1},
            {title: 'item 2', value: 2},
            {title: 'item 3', value: 3}
        ]}
        onClick={onClickHandler}
    />
}

export const AccordionAction = () => {
    const [collapsed, setCollapsed] = useState(true)

    return <Accordion
        titleValue={'Accordion Action'}
        collapsed={collapsed}
        setAccordionCollapsed={() => setCollapsed(!collapsed)}
        items={[
            {title: 'item 1', value: 1},
            {title: 'item 2', value: 2},
            {title: 'item 3', value: 3}
        ]}
        onClick={(id) => alert(`user with ID ${id} should be happy`)}
    />
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
