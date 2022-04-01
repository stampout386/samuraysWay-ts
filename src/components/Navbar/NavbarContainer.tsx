import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {ActionType} from "../../redux/store";
import {RootStateType} from "../../redux/redux-store";


const mapStateToProps = (state: RootStateType) => {
    return {
        sidebarPage: state.sidebarPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {}
}

export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)