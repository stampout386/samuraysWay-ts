import {connect} from "react-redux";
import {UsersPropsType} from "../../redux/store";
import {
    follow, getChangePageThunkCreator, getUsersThunkCreator,
    setPage,
    setTotalUsersCount,
    setUsers,
    toogleIsFetching, toogleIsFollowingProgress,
    unfollow,
} from "../../redux/usersReduser";

import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {usersAPI} from "../../api/usersAPI";


export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangePage = (numberPage: number) => {
        this.props.getChangePageThunkCreator(numberPage, this.props.pageSize)
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
                   toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
                   followIsProgress={this.props.followIsProgress}

            /></>

    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followIsProgress: state.usersPage.followingIsProgress
    }
}

let dispatchToProps = {
    follow, unfollow, setUsers,
    setPage, setTotalUsersCount, toogleIsFetching,
    toogleIsFollowingProgress, getUsersThunkCreator, getChangePageThunkCreator
}

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(UsersAPIComponent)