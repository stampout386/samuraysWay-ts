import {ActionType, PostDataType, ProfilePageType} from "./state";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

export const profileReducer = (state:ProfilePageType,action:ActionType):ProfilePageType => {
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