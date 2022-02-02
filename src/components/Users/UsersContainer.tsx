import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReduser";
import {Users} from "./Users";

let mapStateToProps = (state: RootStateType) => {
    return {users: state.usersPage.users}
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)