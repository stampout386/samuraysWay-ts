import {connect} from "react-redux";
import {UsersPropsType} from "../../redux/store";
import {
    follow,
    setPage,
    setTotalUsersCount,
    setUsers,
    toogleIsFetching,
    unfollow,
} from "../../redux/usersReduser";

import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";


export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toogleIsFetching(false)
            })
    }

    onChangePage = (numberPage: number) => {
        this.props.toogleIsFetching(true)
        this.props.setPage(numberPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   onChangePage={this.onChangePage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
            /></>

    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (numberPage: number) => {
//             dispatch(setPageAC(numberPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toogleIsFetching: (isFetching: boolean) => {
//             dispatch(toogleIsFetchingAC(isFetching))
//         }
//
//     }
//
// }

let dispatchToProps = {
    follow, unfollow, setUsers, setPage, setTotalUsersCount, toogleIsFetching
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(UsersAPIComponent)