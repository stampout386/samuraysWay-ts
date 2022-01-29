import {ActionType, PostDataType, ProfilePageType} from "./store";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";


let initialState = {
    newPostText: '',
    postData: [
        {
            id: 1,
            message: "Hello,how are you?",
            like: 15

        },
        {
            id: 2,
            message: "This is my first post!",
            like: 40

        },
        {
            id: 3,
            message: "This is my second post,I like it!",
            like: 105

        }
    ]
}

export const profileReducer = (state:ProfilePageType = initialState,action:ActionType):ProfilePageType => {
    switch (action.type){
        case ADD_POST:{
            let post: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                like: 0
            }
            state.postData.push(post)
            state.newPostText =''
            return state
        }
        case CHANGE_NEW_POST_TEXT:{
            state.newPostText = action.newPostText;
            return state
        }
        default: {
            return state
        }
    }

}


export const addPostAC = () => {

    return {
        type: ADD_POST
    } as const
}
export const onChangeNewPostAC = (newPostText: string) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        newPostText: newPostText
    } as const

}