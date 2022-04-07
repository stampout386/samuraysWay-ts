import React from "react";

import {
    ActionType,
} from "../../redux/store";
import {addMessageAC, onChangeNewMessageTextAC} from "../../redux/dialogsReduser";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthREdirect";


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
        onchangeNewMessageText: (message: string) => {
            dispatch(onChangeNewMessageTextAC(message))
        }
    }
}
let WithRedirectDialogsComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectDialogsComponent);