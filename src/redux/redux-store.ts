import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {sidebarReducer} from "./sidebarReducer";
import {ActionType, DialogsPageType, ProfilePageType, SidebarDataType} from "./store";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarDataType
}


export let reducers = combineReducers({
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebarPage: sidebarReducer,
    }
)


export type StoreReduxType = Store<EmptyObject & { profilePage: ProfilePageType; dialogsPage: DialogsPageType; sidebarPage: SidebarDataType; }, ActionType>

export let store = createStore(reducers)
