import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileTС, getUserStatusTC, updateStatusTC} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthREdirect";
import {compose} from "redux";
import {RootStateType} from "../../redux/redux-store";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 22088;
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator: getProfileTС, getUserStatusTC, updateStatusTC}),
    withAuthRedirect,
    withRouter)
(ProfileContainer)

