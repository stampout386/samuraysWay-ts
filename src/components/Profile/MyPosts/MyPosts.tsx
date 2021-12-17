import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";



export function MyPosts(props:ProfilePageType) {

    let postRenderArray = props.postData.map(item => {
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