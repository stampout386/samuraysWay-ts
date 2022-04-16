import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthLoginThunkCreator, logoutThunkCreator} from "../../redux/authReducer";

import {RootStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any> {



    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer)