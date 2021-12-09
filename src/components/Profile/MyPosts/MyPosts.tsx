import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}