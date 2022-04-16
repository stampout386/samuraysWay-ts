import {ActionType} from "./store";
import {Dispatch} from "redux";
import {loginAPI} from "../api/usersAPI";
import {stopSubmit} from "redux-form";

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
    return loginAPI.getAuthLoginRequest()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    loginAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthLoginThunkCreator())
            } else {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';

                dispatch(stopSubmit('login', {_error: errorMessage}))
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