import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should be true", () => {
    // data
    const startState: StateType = {
        collapsed: false
    }

    // action
    const endState = reducer(startState,{type: TOGGLE_COLLAPSED} )

    // expect result
    expect(endState.collapsed).toBe(true)
})

test("collapsed should be false", () => {
    // data
    const startState: StateType = {
        collapsed: true
    }

    // action
    const endState = reducer(startState,{type: TOGGLE_COLLAPSED} )

    // expect result
    expect(endState.collapsed).toBe(false)
})