import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";


export function MyPosts() {

    let postData = [
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

    let postRenderArray = postData.map(item => {
        return (
            <Post id={item.id} message={item.message} like={item.like}/>
        )
    })

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.postBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postRenderArray}
            </div>
        </div>
    )
}