import {ActionType, DialogsPageType, MessagesDataType} from "./store";

const ADD_MESSAGE = "ADD_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";


let initialState = {
    dialogsData: [
        {id: 1, name: 'Mike', src: 'https://www.blast.hk/attachments/68493/'},
        {id: 2, name: 'Kate', src: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg'},
        {
            id: 3,
            name: 'Kris',
            src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-22.jpg'
        },
        {
            id: 4,
            name: 'Helga',
            src: 'https://russia-dropshipping.ru/800/600/https/proprikol.ru/wp-content/uploads/2019/08/krutye-kartinki-dlya-vk-24.jpg'
        },
        {id: 5, name: 'Stasy', src: 'https://www.meme-arsenal.com/memes/45bd46f032da02c02977e72df72e3369.jpg'},
        {
            id: 6,
            name: 'Natali',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIAao3RTHBzzfzkppcdaJuCjWoSHJGzIXeA&usqp=CAU'
        },
    ],
    messagesData: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "You are calling me?"},
        {id: 4, message: "i didn't hear,sorry"},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType):DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let message: MessagesDataType = {
                id: new Date().getTime(),
                message: action.textMessage,
            }
            // state.messagesData.push(message);
            // state.newMessageText = "";
            return  {...state,newMessageText:'',messagesData:[...state.messagesData,message]}
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            // state.newMessageText = action.newMessageText;
            return {...state,newMessageText:action.newMessageText}
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