import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthREdirect";


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
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
let WithRedirectProfileComponent = withAuthRedirect(WithUrlDataContainerComponent)
export default connect(mapStateToProps, {getProfileThunkCreator})(WithRedirectProfileComponent)

