//  Types
import {addPostAC, onChangeNewPostAC, profileReducer, setUserProfile} from "./profileReducer";
import {addMessageAC, dialogsReducer, onChangeNewMessageTextAC} from "./dialogsReduser";
import {sidebarReducer} from "./sidebarReducer";
import {StoreReduxType} from "./redux-store";
import {
    follow, followThunkCreator, getChangePageThunkCreator,
    setPage,
    setTotalUsersCount,
    setUsers,
    toogleIsFetching, toogleIsFollowingProgress,
    unfollow,
    UsersPageType,
    UsersType
} from "./usersReduser";
import {setUserData} from "./authReducer";

export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
    src: string
}
export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
}
export type PostDataType = {
    id: number
    message: string
    like: number
}

export type ProfileType = {
    profile: {
        "aboutMe": string,
        "contacts": {
            "facebook": string,
            "website": null | string
            "vk": null | string,
            "twitter": null | string,
            "instagram": null | string,
            "youtube": null | string,
            "github": null | string,
            "mainLink": null | string
        },
        "lookingForAJob": boolean
        "lookingForAJobDescription": string | null
        "fullName": string | null,
        "userId": number,
        "photos": {
            "small": string
            "large": string
        }
    }

}
export type ProfilePageType = {
    newPostText: string
    postData: Array<PostDataType>
    profile: ProfileType | null

}
export type FriendsDataType = {
    id: number
    name: string
    src: string
}
export type SidebarDataType = {
    friendsData: Array<FriendsDataType>
}


// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebarPage: SidebarDataType
//     usersPage: UsersPageType
// }

export type ProfilePagePropsType = {
    // profilePage: ProfilePageType
    // dispatch: (action: ActionType) => void
    store: StoreReduxType
}
export type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    addMessage: (message: string) => void
    onchangeNewMessageText: (text: string) => void
    auth: boolean
}
export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setPage: (numberPage: number) => void
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    toogleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
    toogleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followIsProgress: Array<number>
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    getChangePageThunkCreator: (page: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
    isAuth: boolean
}

export type DialogsContainerPropsType = {
    store: StoreReduxType
}
export type SideBarPropsType = {
    sidebarPage: SidebarDataType
}

// export type ObserverType = (state: RootStateType) => void

export type ActionType =

    ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof onChangeNewPostAC>
    | ReturnType<typeof onChangeNewMessageTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toogleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof toogleIsFollowingProgress>


// export type StoreType = {
//     _state: RootStateType
//     _rerenderEntireTree: (state: RootStateType) => void
//     getState: () => RootStateType
//     subscribe: (observer: ObserverType) => void
//     dispatch: (action: ActionType) => void
// }


// BL


// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             newPostText: '',
//             postData: [
//                 {
//                     id: 1,
//                     message: "Hello,how are you?",
//                     like: 15
//
//                 },
//                 {
//                     id: 2,
//                     message: "This is my first post!",
//                     like: 40
//
//                 },
//                 {
//                     id: 3,
//                     message: "This is my second post,I like it!",
//                     like: 105
//
//                 }
//             ]
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Mike', src: 'https://www.blast.hk/attachments/68493/'},
//                 {id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
//                 {
//                     id: 3,
//                     name: 'Kris',
//                     src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg'
//                 },
//                 {
//                     id: 4,
//                     name: 'Helga',
//                     src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'
//                 },
//                 {id: 5, name: 'Stasy', src: 'https://www.meme-arsenal.com/memes/45bd46f032da02c02977e72df72e3369.jpg'},
//                 {
//                     id: 6,
//                     name: 'Natali',
//                     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIAao3RTHBzzfzkppcdaJuCjWoSHJGzIXeA&usqp=CAU'
//                 },
//             ],
//             messagesData: [
//                 {id: 1, message: "Hello"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "You are calling me?"},
//                 {id: 4, message: "i didn't hear,sorry"},
//             ],
//             newMessageText: ''
//         },
//         sidebarPage: {
//             friendsData:
//                 [{id: 1, name: 'Mike', src: 'https://www.blast.hk/attachments/68493/'},
//                     {id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
//                     {
//                         id: 4,
//                         name: 'Helga',
//                         src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'
//                     }]
//         },
//         usersPage: {
//             users: [
//                 {
//                     id: 1,
//                     photoUrl: '',
//                     followed: true,
//                     name: 'Mik',
//                     status: 'I am boss',
//                     location: {city: 'Minsk', country: 'Belarus'}
//                 },
//                 {
//                     id: 2,
//                     photoUrl: '',
//                     followed: true,
//                     name: 'Dmitry',
//                     status: 'I am groot',
//                     location: {city: 'Minsk', country: 'Belarus'}
//                 },
//                 {
//                     id: 3,
//                     photoUrl: '',
//                     followed: false,
//                     name: 'Jonn',
//                     status: 'I am good',
//                     location: {city: 'New-York', country: 'USA'}
//                 },
//                 {
//                     id: 4,
//                     photoUrl: '',
//                     followed: false,
//                     name: 'Artem',
//                     status: 'I am pet',
//                     location: {city: 'Warshaw', country: 'Poland'}
//                 },
//
//             ]
//         }
//
//
//     },
//
//     _rerenderEntireTree(state: RootStateType) {
//
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: ObserverType) {
//         this._rerenderEntireTree = observer
//     },
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
//
//         this._rerenderEntireTree(this._state)
//
//     },
//
//
// }






