type ActionType = {
    type: string

}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType) : StateType => {
    console.log("REDUCER START")
    console.log(state)
    console.log(action)
    console.log("REDUCER END")

    if (action.type === TOGGLE_COLLAPSED) {
        const stateCopy = {
            ...state,
            collapsed: !state.collapsed
        }
        return stateCopy
    }

    return state
}