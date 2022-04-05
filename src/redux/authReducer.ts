import {ActionType} from "./store";
import {Dispatch} from "redux";
import {headerAPI} from "../api/usersAPI";

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
//action

export const setUserData = (userId: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId, email, login
        }
    } as const
}
//thunk

export const getAuthLoginThunkCreator = () => (dispatch: Dispatch) => {
    headerAPI.getAuthLoginRequest()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserData(id, login, email))
            }
        })
}