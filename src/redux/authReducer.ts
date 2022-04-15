import {ActionType} from "./store";
import {Dispatch} from "redux";
import {loginAPI} from "../api/usersAPI";

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
            return {...state, ...action.payload, isAuth: action.isAuth}
        }
        default:
            return state
    }
}
//action

export const setUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId, email, login
        },
        isAuth
    } as const
}

//thunk

export const getAuthLoginThunkCreator = () => (dispatch: Dispatch) => {
    loginAPI.getAuthLoginRequest()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    loginAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthLoginThunkCreator())
            }
        })
}

export const logoutThunkCreator = () => (dispatch: Dispatch) => {
    loginAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(0, '', '', false))
            }
        })
}