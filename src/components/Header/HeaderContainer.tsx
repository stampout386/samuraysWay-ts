import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";

import {RootStateType} from "../../redux/redux-store";
import axios from "axios";

class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        console.log(this.props)
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
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