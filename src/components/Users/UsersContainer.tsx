import {connect} from "react-redux";
import {UsersPropsType} from "../../redux/store";
import {
    followThunkCreator, getChangePageThunkCreator, getUsersThunkCreator,
    unfollowThunkCreator,
} from "../../redux/usersReduser";

import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader/Preloader";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthREdirect";


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
                   followIsProgress={this.props.followIsProgress}
                   unfollowThunkCreator={this.props.unfollowThunkCreator}
                   followThunkCreator={this.props.followThunkCreator}

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
        followIsProgress: state.usersPage.followingIsProgress,
    }
}

let dispatchToProps = {
    getUsersThunkCreator, getChangePageThunkCreator, unfollowThunkCreator, followThunkCreator
}

let WithRedirectUsersComponent = withAuthRedirect(UsersAPIComponent)

export const UsersContainer = connect(mapStateToProps, dispatchToProps)(WithRedirectUsersComponent)