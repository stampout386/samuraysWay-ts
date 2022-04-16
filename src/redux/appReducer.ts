import {ActionType} from "./store";
import {Dispatch} from "redux";
import {getAuthLoginThunkCreator} from "./authReducer";

const SET_INITIALAZED = "SET_INITIALAZED";

export type AppPageType = {
    initialized: boolean
}

const inicialState = {
    initialized: false
}

export const appReducer = (state: AppPageType = inicialState, action: ActionType): AppPageType => {
    switch (action.type) {

        case SET_INITIALAZED: {
            return {...state, initialized: true}
        }
        default:
            return state
    }
}
//action

export const setInitialazedSucsess = () => {
    return {
        type: SET_INITIALAZED
    } as const
}

export const getInitialazedTC = () => (dispatch: any) => {
    let promise = dispatch(getAuthLoginThunkCreator())
    promise.then(
        dispatch(setInitialazedSucsess())
    )

}
