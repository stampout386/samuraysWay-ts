import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/store";

import {Field, reduxForm} from "redux-form";

type MyPostsType = {
    postData: Array<PostDataType>,
    addPost: (newPostText: string) => void
}


export function MyPosts(props: MyPostsType) {

    let postRenderArray = props.postData.map(item => {
        return (
            <Post key={item.id} id={item.id} message={item.message} like={item.like}/>
        )
    })


    const addPost = (postBody: any) => {
        props.addPost(postBody.profilePostBody);
    }


    return (
        <div>
            <h3>My posts</h3>
            <div className={s.postBlock}>
                <ProfilePostReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postRenderArray}
            </div>
        </div>
    )
}

export const ProfilePostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'profilePostBody'} placeholder={'your post'}></Field>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const ProfilePostReduxForm = reduxForm({form: 'profileForm'})(ProfilePostForm)