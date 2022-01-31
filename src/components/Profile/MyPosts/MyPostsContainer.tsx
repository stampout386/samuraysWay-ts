
import React from "react";

import {ActionType, RootStateType} from "../../../redux/store";
import {addPostAC, onChangeNewPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state: RootStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData

    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (newPost:string) => {
            dispatch(addPostAC(newPost))
        },
        changeNewPostTextCallBack: (text: string) => {
            dispatch(onChangeNewPostAC(text))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);