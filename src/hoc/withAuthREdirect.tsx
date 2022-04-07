import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export let mapStateToPropsForRedirect = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    let RedirectComponent = (props: any) => {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}

