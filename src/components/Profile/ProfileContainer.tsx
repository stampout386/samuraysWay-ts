import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {ProfilePageType} from "../../redux/store";


class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if (this.props.isAuth === false) return <Redirect to={'/login'}/>
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)

