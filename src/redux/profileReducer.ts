import {ActionType, PostDataType, ProfilePageType, ProfileType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/usersAPI";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';


let initialState = {
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
            return {...state, postData: [...state.postData, post]}
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

// action creator
export const addPostAC = (postText: string) => {

    return {
        type: ADD_POST,
        newPostText: postText
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
export const setUserStatus = (status: string) => {
    return {
        type: SET_PROFILE_STATUS,
        payload: {
            status
        }

    } as const
}

// thunk creator
export const getProfileTС = (userId: number) => (dispatch: Dispatch) => {

    profileAPI.getProfileRequest(userId)
        .then((data) => {
            dispatch(setUserProfile(data))
        })
}
export const getUserStatusTC = (userId: number) => (dispath: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((data) => {
            dispath(setUserStatus(data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {

            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }

        })
}