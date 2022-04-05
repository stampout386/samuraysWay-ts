import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthLoginThunkCreator, setUserData} from "../../redux/authReducer";

import {RootStateType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        this.props.getAuthLoginThunkCreator()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: RootStateType) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {setUserData, getAuthLoginThunkCreator})(HeaderContainer)