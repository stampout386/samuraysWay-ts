import React from "react";

import {
    ActionType,
} from "../../redux/store";
import {addMessageAC} from "../../redux/dialogsReduser";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthREdirect";
import {compose} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        },

    }
}


export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)