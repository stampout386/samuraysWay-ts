import {ActionType, PostDataType, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/usersAPI";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'


let initialState = {
    newPostText: '',
    postData: [
        {
            id: 1,
            message: "Hello,how are you?",
            like: 15

        },
        {
            id: 2,
            message: "This is my first post!",
            like: 40

        },
        {
            id: 3,
            message: "This is my second post,I like it!",
            like: 105

        }
    ],
    profile: null,
    status: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let post: PostDataType = {
                id: new Date().getTime(),
                message: action.newPostText,
                like: 0
            }
            return {...state, newPostText: '', postData: [...state.postData, post]}
        }
        case CHANGE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newPostText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile}
        }
        case SET_PROFILE_STATUS: {
            return {...state, status: action.payload.status}
        }
        default: {
            return state
        }
    }

}


export const addPostAC = (postText: string) => {

    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}
export const onChangeNewPostAC = (newPostText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const

}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}
export const setUserStatus = (status: number) => {
    return {
        type: SET_PROFILE_STATUS,
        payload: {
            status
        }

    } as const
}


export const getProfileThunkCreator = (userId: number) => (dispatch: Dispatch) => {
    if (!userId) {
        userId = 22088;
    }
    profileAPI.getProfileRequest(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
}

export const getStatusTC = (userId: number) => (dispath: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((data) => {
            dispath(setUserStatus(data))
        })
}