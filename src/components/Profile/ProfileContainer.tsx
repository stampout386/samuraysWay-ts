import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileThunkCreator(userId)
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

export default connect(mapStateToProps, {setUserProfile, getProfileThunkCreator})(WithUrlDataContainerComponent)

