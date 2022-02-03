import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReduser";
import {UsersClass} from "./UsersClass";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>, totalCount: number) => {
            dispatch(setUsersAC(users, totalCount))
        },
        setCurrentPage: (currentPage:number)=> {
            dispatch(setCurrentPageAC(currentPage))
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)