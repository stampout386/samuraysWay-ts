import {ActionType} from "./store";

const SET_USER_DATA = "SET_USER_DATA";

const inicialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: any = inicialState, action: ActionType): any => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    } as const
}