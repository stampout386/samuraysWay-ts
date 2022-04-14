import React from "react";

import {ActionType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";


const mapStateToProps = (state: RootStateType) => {
    return {
        postData: state.profilePage.postData
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);