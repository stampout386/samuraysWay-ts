import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.postBlock}>
            <h3 className={s.postBlock}>My posts</h3>
            <div className={s.postBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hello,how are you?" like={15}/>
                <Post message="This is my first post!" like={40}/>
            </div>
        </div>
    )
}