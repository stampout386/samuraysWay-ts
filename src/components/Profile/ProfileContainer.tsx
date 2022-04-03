import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/usersAPI";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        const myId = this.props.auth.userId
        if (!userId) {
            userId = myId;
        }
        profileAPI.getProfileRequest(userId)
            .then((data) => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        auth: state.auth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

