import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store";
import {followAC, setPageAC, setTotalCountAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReduser";
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
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setPage: (numberPage:number)=> {
            dispatch(setPageAC(numberPage))
        },
        setTotalUsersCount:( totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }

    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)