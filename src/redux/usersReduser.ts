import {ActionType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/usersAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS'

export type UsersType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    // location: {
    //     city: string
    //     country: string
    // }
}
export type UsersPageType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingIsProgress: Array<number>
}

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingIsProgress: [],

}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.userId ? {
                    ...item,
                    followed: !item.followed
                } : item)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(item => item.id === action.payload.userId ? {
                    ...item,
                    followed: !item.followed
                } : item)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.payload.users],
            }
        case CURRENT_PAGE :
            return {
                ...state, currentPage: action.payload.numberPage
            }
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.payload.totalCount
            }
        case TOOGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.payload.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingIsProgress: action.payload.isFetching
                    ? [...state.followingIsProgress, action.payload.userId]
                    : state.followingIsProgress.filter(id => id != action.payload.userId)
            }

        default :
            return state

    }
}

// action
export const follow = (userId: number) => {
    return {
        type: FOLLOW, payload: {
            userId
        }
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW, payload: {
            userId
        }
    } as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: SET_USERS, payload: {users}
    } as const
}
export const setPage = (numberPage: number) => {
    return {
        type: CURRENT_PAGE,
        payload: {
            numberPage
        }
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_COUNT,
        payload: {
            totalCount
        }
    } as const
}
export const toogleIsFetching = (isFetching: boolean) => {
    return {
        type: TOOGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}
export const toogleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOOGLE_IS_FOLLOWING_PROGRESS,
        payload: {
            isFetching, userId

        }
    } as const
}


//thunk
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFetching(true))
    usersAPI.getUsersRequest(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(toogleIsFetching(false))

        })
}
export const getChangePageThunkCreator = (numberPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toogleIsFetching(true))
    dispatch(setPage(numberPage))

    usersAPI.onChangePageUsersRequest(numberPage, pageSize)
        .then(data => {
            dispatch(toogleIsFetching(false))
            dispatch(setUsers(data.items))
        })
}