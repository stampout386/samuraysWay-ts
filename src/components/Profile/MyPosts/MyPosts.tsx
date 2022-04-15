import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/store";

import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, requairedFields} from "../../../utils/validators/validators";
import {Textarea} from "../../../commons/FormsComponents/FormsComponents";

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

const maxLength50 = maxLenghtCreator(50);

export const ProfilePostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <Field component={Textarea} name={'profilePostBody'} placeholder={'Post message'} validate={[requairedFields, maxLength50]}></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const ProfilePostReduxForm = reduxForm({form: 'profileForm'})(ProfilePostForm)