import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";

import {RootStateType} from "../../redux/redux-store";
import {headerAPI} from "../../api/usersAPI";

class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        console.log(this.props)
        headerAPI.getAuthLoginRequest()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setUserData(id, login, email)
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer)