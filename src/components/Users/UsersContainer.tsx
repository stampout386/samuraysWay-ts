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
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/usersAPI";


export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        usersAPI.getUsersRequest(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toogleIsFetching(false)
            })
    }

    onChangePage = (numberPage: number) => {
        this.props.toogleIsFetching(true)
        this.props.setPage(numberPage)
        usersAPI.onChangePageUsersRequest(numberPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
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

let dispatchToProps = {
    follow, unfollow, setUsers, setPage, setTotalUsersCount, toogleIsFetching
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(UsersAPIComponent)