import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {ActionType, RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        sidebarPage:state.sidebarPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {}
}

export const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)