import {ActionType, DialogsPageType, MessagesDataType} from "./state";

const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

export const dialogsReducer = (state: DialogsPageType, action: ActionType):DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let message: MessagesDataType = {
                id: new Date().getTime(),
                message: action.textMessage,
            }
            state.messagesData.push(message);
            state.newMessageText = "";
            return state
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText;
            return state
        }
        default : {
            return state
        }
    }
}


export const addMessageAC = (textMessage: string) => {
    return {
        type: ADD_MESSAGE,
        textMessage

    } as const
}
export const onChangeNewMessageTextAC = (newMessageText: string) => {
    return {
        type: CHANGE_NEW_MESSAGE_TEXT,
        newMessageText

    } as const
}