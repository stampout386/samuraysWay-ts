import {applyMiddleware, combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {sidebarReducer} from "./sidebarReducer";
import {ActionType, DialogsPageType, ProfilePageType, SidebarDataType} from "./store";
import {UsersPageType, usersReducer} from "./usersReduser";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {AppPageType, appReducer} from "./appReducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarDataType
    usersPage: UsersPageType
    auth: any
    form: any
    app: AppPageType
}


export let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    }
)


export type StoreReduxType = Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebarPage: SidebarDataType; usersPage: UsersPageType; auth: any }, ActionType>

export let store = createStore(reducers, applyMiddleware(thunk))
//@ts-ignore
window.store = store
